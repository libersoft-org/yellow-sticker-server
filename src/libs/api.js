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

 async getSets(p) {
  const res = await this.data.getSets(p.id);
  if (res.length < 1) return { error: 1, message: 'Sticker set(s) not found' };
  return { error: 0, data: res };
 }

 async getStickers(p) {
  const resSet = await this.data.getSets(p.id);
  if (resSet.length !== 1) return { error: 1, message: 'Wrong sticker set ID' };
  const resStickers = await this.data.getStickers(p.id);
  return {
   error: 0,
   data: {
    id: resSet[0].id,
    alias: resSet[0].alias,
    name: resSet[0].name,
    animated: resSet[0].animated,
    created: resSet[0].created,
    stickers: resStickers,
   },
  };
 }
}

export default API;
