/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "lqlblog";

  // 中间件
  config.middleware = [];
  // 跨域相关配置
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: ["*"],
  };
  config.cors = {
    credentials: true,
    allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS",
  };
  // 数据库连接
  config.mysql = {
    client: {
      host: "localhost",
      // 端口号
      port: "3306",
      // 用户名
      user: "root",
      // 密码
      password: "lql111333",
      // 数据库名
      database: "lql_blog",
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
