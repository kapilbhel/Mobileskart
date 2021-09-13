const mobiles = require('./data/mobile');
const Mobile = require('../models/mobile');

class FakeDB {

  clean() {
    return Mobile.deleteMany({});
  }

  addData() {
    return Mobile.create(mobiles);
  }

  async populate() {
    await this.clean();
    await this.addData();
  } 
}

module.exports = FakeDB; 