"use strict";

const Controller = require("egg").Controller;
const fs = require("fs");
const path = require('path');
class HomeController extends Controller {
  async navlist() {
    const { ctx, service ,app } = this;
    const now = 24 * 60 * 60 * 1000;
    const nowdate = new Date().getTime();
    ctx.cookies.set("hahah", "111" + nowdate, {
      httpOnly: false,
      maxAge: now,
      signed: false,
    });
    const res = await service.home.navlist();
    ctx.success(res);
  }
  async setcookie() {
    const { ctx } = this;
    const now = 24 * 60 * 60 * 1000;
    const nowdate = new Date().getTime();
    ctx.cookies.set("lqlblog", "hahaguo_lqlblog_" + nowdate, {
      httpOnly: false,
      maxAge: now,
      signed: false,
    });
    ctx.success("");
  }
  async fileread() {
    const { ctx } = this;
    const tempPath =path.dirname('../../files/readfile.json');
    const fileResult =  fs.openSync(tempPath)
    ctx.success("");
  }
}

module.exports = HomeController;
