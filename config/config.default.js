/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: 'fangmiao.zjlup.com',
      // 端口号
      port: '33066',
      // 用户名
      user: 'root',
      // 密码
      password: '123',
      // 数据库名
      database: 'bigdata',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };
  config.cluster = {
    listen: {
      port: 7001,
      hostname: '0.0.0.0',
    },
  };
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1588763484947_319';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  return {
    ...config,
    ...userConfig,
  };
};
