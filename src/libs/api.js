import Data from './data.js';

class API {
 constructor() {
  this.data = new Data();
  this.apiMethods = {
   sets: this.getSets,
   stickers: this.getStickers,
  };
 }

 async processAPI(name, params) {
  //console.log('API request:', name);
  //console.log('Parameters:', params);
  const method = this.apiMethods[name];
  if (method) return await method.call(this, params);
  else return { error: 1, message: 'API not found' };
 }

 async getSets() {
  return await this.data.getSets();
 }

 async getStickers(p) {
  return await this.data.getStickers(p.id);
 }
}

export default API;
