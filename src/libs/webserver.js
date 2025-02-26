import path from 'path';
import API from './api.js';
import Common from './common.js';

class WebServer {
 constructor() {
  this.api = new API();
 }

 async start() {
  try {
   await this.startServer();
   this.api = new API(this);
  } catch (ex) {
   Common.addLog('Cannot start web server.', 2);
   Common.addLog(ex, 2);
  }
 }

 async startServer() {
  const certs = Common.settings.web.certificates;
  const certs_bun = [];
  if (!Common.settings.web.https_disabled) {
   for (const c of certs) {
    if (!c.domain) {
     Common.addLog('Error: One of the certificates has a missing domain name in settings file.', 2);
     process.exit(1);
    }
    if (!c.private) {
     Common.addLog('Error: Private key path for domain ' + c.domain + ' is missing in settings file.', 2);
     process.exit(1);
    }
    if (!c.public) {
     Common.addLog('Error: Public key path for domain ' + c.domain + ' is missing in settings file.', 2);
     process.exit(1);
    }
    const priv = Bun.file(c.private);
    if (!(await priv.exists())) {
     Common.addLog('Error: Private key file for domain ' + c.domain + ' cannot be loaded.', 2);
     process.exit(1);
    }
    const pub = Bun.file(c.public);
    if (!(await pub.exists())) {
     Common.addLog('Error: Public key file for domain ' + c.domain + ' cannot be loaded.', 2);
     process.exit(1);
    }
    certs_bun.push({ key: priv, cert: pub, serverName: c.domain });
   }
  }
  if (Common.settings.web.standalone) {
   Bun.serve({ fetch: this.getFetch(), port: Common.settings.web.http_port });
   Common.addLog('HTTP server is running on port: ' + Common.settings.web.http_port);
   Bun.serve({ fetch: this.getFetch(), port: Common.settings.web.https_port, tls: certs_bun });
   Common.addLog('HTTPS server is running on port: ' + Common.settings.web.https_port);
  } else {
   const socketPath = Common.settings.web.socket_path.startsWith('/') ? Common.settings.web.socket_path : path.join(Common.appPath, Common.settings.web.socket_path);
   Bun.serve({ fetch: this.getFetch(), unix: socketPath });
   const fs = require('fs');
   fs.chmodSync(socketPath, '777');
   Common.addLog('HTTP server is running on Unix socket: ' + socketPath);
  }
 }

 getFetch() {
  return async (req, server) => {
   let clientIP = server.requestIP(req)?.address;
   const forwardedHeaders = [req.headers.get('x-forwarded-for'), req.headers.get('cf-connecting-ip'), req.headers.get('x-real-ip'), req.headers.get('forwarded'), req.headers.get('x-client-ip'), req.headers.get('x-cluster-client-ip'), req.headers.get('true-client-ip'), req.headers.get('proxy-client-ip'), req.headers.get('wl-proxy-client-ip')];
   for (const header of forwardedHeaders) {
    if (header) {
     clientIP = header.split(',')[0];
     break;
    }
   }
   Common.addLog(req.method + ' request from: ' + clientIP + ', URL: ' + req.url);
   try {
    const url = new URL(req.url);
    if (Common.settings.web.standalone && url.protocol == 'http:') {
     url.protocol = 'https:';
     if (Common.settings.web.https_port !== 443) url.port = Common.settings.web.https_port;
     else url.port = '';
     return new Response(null, { status: 301, headers: { Location: url.toString() } });
    }

    if (url.pathname.startsWith('/api/')) {
     const apiName = url.pathname.replace('/api/', '');
     return new Response(JSON.stringify(await this.api.processAPI(apiName, Object.fromEntries(url.searchParams))), { headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } });
    } else {
     return this.getFile(req);
    }
   } catch (ex) {
    Common.addLog(ex, 2);
    return await this.getNotFound();
   }
  };
 }

 async getFile(req) {
  let urlPath = new URL(req.url).pathname;
  const rootDir = Common.settings.web.root.startsWith('/') ? Common.settings.web.root : path.join(Common.appPath, Common.settings.web.root);
  if (urlPath.endsWith('/')) urlPath = path.join(urlPath, 'index.html');
  const file = Bun.file(path.join(rootDir, urlPath));
  if (await file.exists()) return new Response(file, { headers: { 'Content-Type': file.type } });
  return await this.getNotFound();
 }

 async getNotFound() {
  const rootDir = Common.settings.web.root.startsWith('/') ? Common.settings.web.root : path.join(Common.appPath, Common.settings.web.root);
  const notFoundFile = Bun.file(path.join(rootDir, 'notfound.html'));
  if (await notFoundFile.exists()) return new Response(notFoundFile, { status: 404, headers: { 'Content-Type': 'text/html' } });
  //return new Response('<h1>404 Not Found</h1>', { status: 404, headers: { 'Content-Type': 'text/html' } });
 }
}

export default WebServer;
