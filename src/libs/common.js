import { appendFileSync } from 'fs';
import { EOL } from 'os';
import { dirname } from 'path';

class Common {
 static appName = 'Yellow Sticker Server';
 static appVersion = '0.0.1';
 static settingsFile = 'settings.json';
 static appPath = dirname(import.meta.dir) + '/';
 static settings;

 static addLog(message, type = 0) {
  const date = this.getDateTime();
  const msg = message === undefined ? '' : message;
  let typeText = 'INFO';
  let color = '\x1b[32m';
  switch (type) {
   case 1:
    typeText = 'WARNING';
    color = '\x1b[33m';
    break;
   case 2:
    typeText = 'ERROR';
    color = '\x1b[31m';
  }
  console.log('\x1b[96m' + date + '\x1b[0m [' + color + typeText + '\x1b[0m] ' + msg);
  if (this.settings && this.settings.other && this.settings.log.enabled) appendFileSync(this.appPath + this.settings.other.file, date + ' [' + typeText + '] ' + msg + EOL);
 }

 static getDateTime() {
  function toString(number, padLength) {
   return number.toString().padStart(padLength, '0');
  }
  const date = new Date();
  return toString(date.getFullYear(), 4) + '-' + toString(date.getMonth() + 1, 2) + '-' + toString(date.getDate(), 2) + ' ' + toString(date.getHours(), 2) + ':' + toString(date.getMinutes(), 2) + ':' + toString(date.getSeconds(), 2);
 }

 static translate(template, dictionary) {
  for (const key in dictionary) template = template.replaceAll(key, dictionary[key]);
  return template;
 }
}

export default Common;
