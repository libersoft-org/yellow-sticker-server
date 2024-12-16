import mariaDB from 'mariadb';
import Common from './common.js';

interface DatabaseSettings {
 host: string;
 port: number;
 user: string;
 password: string;
 name: string;
}

class Database {
 settings: DatabaseSettings;
 connectionConfig: mariaDB.PoolClusterConfig;
 connections: object;
 cluster: mariaDB.PoolCluster | null;
 serverSettings: object;

 constructor() {
  this.settings = Common.settings.database;
  this.connections = {};
  this.serverSettings = {
   host: this.settings.host,
   port: this.settings.port,
   user: this.settings.user,
   password: this.settings.password,
   database: this.settings.name,
  };
  this.connectionConfig = {
   bigIntAsNumber: true,
   metaAsArray: false,
   //trace: import.meta.env.VITE_YELLOW_DEBUG,
   //debug: import.meta.env.VITE_YELLOW_DB_DEBUG,
   initializationTimeout: 1000,
   leakDetectionTimeout: 10000,
   connectionLimit: 10,
  };
  this.cluster = null;
 }

 async connect(): Promise<void> {
  this.cluster = await mariaDB.createPoolCluster({ restoreNodeTimeout: 1000, removeNodeErrorCount: 999999999 });
  this.cluster.add('server1', this.serverSettings);
  let conn = await this.cluster.getConnection();
  Common.addLog('Connected to database, connection ID:' + conn.threadId);
  conn.release();
 }

 async disconnect(): Promise<void> {
  if (this.cluster) {
   await this.cluster.end();
   this.cluster = null;
   Common.addLog('Disconnected from the database');
  }
 }

 async execute<T>(callback: (conn: mariaDB.Connection) => Promise<T>): Promise<T> {
  if (!this.cluster) await this.connect();
  //Common.addLog('pool.getConnection()...');
  let c = await this.cluster?.getConnection();
  //Common.addLog('pool.getConnection()...done');
  let result;
  try {
   result = await callback(c);
  } catch (err) {
   Common.addLog('Error executing database command:' + err, 2);
   throw err;
  } finally {
   //Common.addLog('commit & release ' + c?.threadId);
   await c?.commit();
   await c?.release();
   //Common.addLog('done commit & release ' + c?.threadId);
  }
  return result;
 }

 async query<T>(command: string, params: any[] = []): Promise<T> {
  return await this.execute(async conn => {
   const result = await conn.query(command, params);
   delete result.meta;
   return result;
  });
 }

 async databaseExists(): Promise<boolean> {
  return await this.execute(async conn => {
   const rows = await conn.query('SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = ?', [this.settings.name]);
   return rows.length > 0;
  });
 }

 async tableExists(name: string): Promise<boolean> {
  return await this.execute(async conn => {
   const rows = await conn.query('SELECT COUNT(*) AS cnt FROM information_schema.tables WHERE table_schema = ? AND table_name = ?', [this.settings.name, name]);
   return rows[0].cnt === 1;
  });
 }
}

export default Database;
