import Data from './data.js';

class API {
 constructor() {
  this.data = new Data();
  this.apiMethods = {
   sets: this.getSets,
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
  const resSets = await this.data.getSets(p.id);
  if (resSets.length < 1) return { error: 1, message: 'Sticker set(s) not found' };
  let setsMap = {};
  for (let set of resSets) setsMap[set.id] = set;
  const resStickers = await this.data.getStickers(p.id);
  for (let item of resStickers) {
   if (!setsMap[item.id_sets].items) setsMap[item.id_sets].items = [];
   setsMap[item.id_sets].items.push(item);
   delete item.id_sets;
  }

  return {
   error: 0,
   data: resSets,
  };
 }
}

export default API;
