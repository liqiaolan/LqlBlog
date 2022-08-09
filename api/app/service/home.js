const Service = require('egg').Service;

class HomeService extends Service {
  // 获取nav列表
  async navlist(n) {
    const { app } = this;
    const res = await app.mysql.select("navlist");
    return res;
  }
}

module.exports = HomeService;