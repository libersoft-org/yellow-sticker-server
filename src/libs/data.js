import Common from './common.js';
import Database from './database.ts';

class Data {
 constructor() {
  this.db = new Database();
 }

 async close() {
  await this.db.disconnect();
 }

 async createDB() {
  try {
   await this.db.query('CREATE TABLE IF NOT EXISTS sets (id INT PRIMARY KEY AUTO_INCREMENT, alias VARCHAR(128) NOT NULL UNIQUE, name VARCHAR(128) NOT NULL, animated BOOL NOT NULL DEFAULT false, priority INT NOT NULL DEFAULT 0, created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP)');
   await this.db.query('CREATE TABLE IF NOT EXISTS stickers (id INT PRIMARY KEY AUTO_INCREMENT, id_sets INT, name VARCHAR(128) NOT NULL, created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, FOREIGN KEY (id_sets) REFERENCES sets(id))');
   await this.db.query('INSERT INTO sets (alias, name, animated) VALUES ("standard", "Standard animated emoji", true)');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f600.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f603.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f604.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f601.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f606.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f605.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f602.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f923.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f62d.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f609.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f617.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f619.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f61a.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f618.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f970.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f60d.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f929.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f973.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1fae0.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f643.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f642.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f972.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f979.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f60a.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "263a_fe0f.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f60c.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f60f.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f924.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f60b.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f61b.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f61d.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f61c.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f92a.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f974.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f614.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f97a.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f62c.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f611.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f610.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f636.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f636_200d_1f32b_fe0f.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1fae5.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f910.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1fae1.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f914.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f92b.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1fae2.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f92d.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f971.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f917.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1fae3.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f631.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f928.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f9d0.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f612.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f644.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f62e_200d_1f4a8.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f624.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f620.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f621.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f92c.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f61e.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f613.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f61f.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f625.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f622.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "2639_fe0f.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f641.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1fae4.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f615.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f630.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f628.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f627.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f626.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f62e.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f62f.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f632.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f633.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f92f.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f616.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f623.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f629.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f62b.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f635.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f635_200d_1f4ab.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1fae8.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f976.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f975.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f922.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f92e.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f634.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f62a.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f927.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f912.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f915.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f637.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f925.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f607.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f920.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f911.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f913.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f60e.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f978.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f921.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f608.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f47f.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f47b.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f480.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f383.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f4a9.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f916.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f47d.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f31e.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f31b.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f31c.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f648.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f649.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f64a.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f63a.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f638.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f639.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f63b.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f63c.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f63d.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f640.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f63f.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f63e.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f31f.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "2728.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f4a5.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f525.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f4af.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f389.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "2764_fe0f.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f9e1.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f49b.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f49a.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1fa75.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f499.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f49c.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f90e.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f5a4.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1fa76.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f90d.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1fa77.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f498.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f49d.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f496.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f497.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f493.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f49e.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f495.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f48c.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f49f.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "2763_fe0f.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "2764_fe0f_200d_1fa79.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f494.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "2764_fe0f_200d_1f525.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f48b.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f463.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1fac0.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1fa78.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f9a0.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f440.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f441_fe0f.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1fae6.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f9bf.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f9be.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f4aa.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f4aa_1f3fb.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f4aa_1f3fc.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f4aa_1f3fd.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f4aa_1f3fe.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f4aa_1f3ff.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f44f.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f44f_1f3fb.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f44f_1f3fc.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f44f_1f3fd.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f44f_1f3fe.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f44f_1f3ff.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f44d.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f44d_1f3fb.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f44d_1f3fc.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f44d_1f3fd.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f44d_1f3fe.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f44d_1f3ff.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f44e.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f44e_1f3fb.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f44e_1f3fc.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f44e_1f3fd.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f44e_1f3fe.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f44e_1f3ff.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f64c.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f64c_1f3fb.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f64c_1f3fc.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f64c_1f3fd.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f64c_1f3fe.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f64c_1f3ff.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f44b.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f44b_1f3fb.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f44b_1f3fc.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f44b_1f3fd.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f44b_1f3fe.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f44b_1f3ff.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "270c_fe0f.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "270c_1f3fb.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "270c_1f3fc.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "270c_1f3fd.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "270c_1f3fe.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "270c_1f3ff.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f91e.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f91e_1f3fb.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f91e_1f3fc.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f91e_1f3fd.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f91e_1f3fe.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f91e_1f3ff.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "261d_fe0f.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "261d_1f3fb.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "261d_1f3fc.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "261d_1f3fd.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "261d_1f3fe.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "261d_1f3ff.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f64f.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f64f_1f3fb.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f64f_1f3fc.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f64f_1f3fd.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f64f_1f3fe.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f64f_1f3ff.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f483.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f483_1f3fb.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f483_1f3fc.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f483_1f3fd.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f483_1f3fe.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f483_1f3ff.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f339.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f940.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f342.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f331.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f343.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f340.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "2744_fe0f.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f30b.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f305.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f304.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f308.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1fae7.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f30a.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f32c_fe0f.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f32a_fe0f.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "26a1.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f4a7.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f327_fe0f.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f329_fe0f.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f4ab.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "2604_fe0f.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f30d.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f30e.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f30f.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f42e.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f984.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f98e.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f409.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f996.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f995.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f422.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f40a.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f40d.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f438.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f407.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f400.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f429.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f415.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f9ae.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f415_200d_1f9ba.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f416.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f40e.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1facf.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f402.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f410.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f998.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f405.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f412.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f98d.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f9a7.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f43f_fe0f.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f9a6.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f987.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f426.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f426_200d_2b1b.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f413.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f423.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f424.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f425.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f985.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f54a_fe0f.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1fabf.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f99a.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f9ad.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f988.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f42c.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f433.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f421.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f980.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f419.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1fabc.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f577_fe0f.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f40c.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f41c.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f99f.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1fab3.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1fab0.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f41d.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f41e.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f98b.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f41b.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1fab1.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f43e.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f345.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f373.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f35d.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f35c.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f37f.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "2615.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f37b.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f942.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f37e.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f377.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f379.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f6a7.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f6a8.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f6b2.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f6f8.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f680.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f6eb.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f6ec.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f3a2.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f3d5_fe0f.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f38a.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f388.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f382.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f381.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f386.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1fa85.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1faa9.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "26bd.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "26be.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f94e.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f3be.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f3f8.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f94d.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f3cf.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f3d1.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f3d2.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f3af.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f94f.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1fa83.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1fa81.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f3d3.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f3b3.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f3b2.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f3b0.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f4f8.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f3bb.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f941.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1fa87.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f50b.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1faab.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f4b8.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "2696_fe0f.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f4a1.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f393.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "2602_fe0f.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f48e.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "2699_fe0f.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "270f_fe0f.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "23f0.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f6ce_fe0f.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f514.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f52e.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "2648.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "2649.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "264a.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "264b.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "264c.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "264d.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "264e.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "264f.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "2650.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "2651.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "2652.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "2653.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "26ce.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "2757.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "2753.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "2049_fe0f.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "203c_fe0f.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "274c.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f198.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f4f4.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "2705.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f195.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f193.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f199.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f192.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f6ae.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f3b6.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "2795.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f3c1.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f6a9.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f3f4.tgs")');
   await this.db.query('INSERT INTO stickers (id_sets, name) VALUES (1, "1f3f3_fe0f.tgs")');
  } catch (ex) {
   Common.addLog('createDB: ' + ex, 2);
   process.exit(1);
  }
 }

 async getSets(id) {
  let query = 'SELECT id, alias, name, animated, created FROM sets';
  if (id) query += ' WHERE id = ?';
  query += ' ORDER BY id ASC';
  return await this.db.query(query, [id]);
 }

 async getStickers(id) {
  return await this.db.query('SELECT id, name, created FROM stickers WHERE id_sets = ? ORDER BY id ASC', [id]);
 }
}

export default Data;
