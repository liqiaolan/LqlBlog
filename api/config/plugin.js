"use strict";

/** @type Egg.EggPlugin */
module.exports = {
  // 跨域插件
  cors: {
    enable: true,
    package: "egg-cors",
  },
  // 数据库插件
  mysql: {
    enable: true,
    package: "egg-mysql",
  },
};
