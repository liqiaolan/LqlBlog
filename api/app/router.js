'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/lqlblog/api/nav/list', controller.home.navlist);
  router.get('/lqlblog/api/setcookie', controller.home.setcookie);
  router.get('/lqlblog/api/fileread', controller.home.fileread);
  
};
