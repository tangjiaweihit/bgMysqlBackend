'use strict';
const moment = require('moment');
const Controller = require('egg').Controller;
// const hbase = require('hbase');
// require('assert');
// const client = hbase({
//   host: 'localhost',
//   port: 8090,
// });

class HomeController extends Controller {
  async index() {
    const {
      ctx,
    } = this;
    const letDate = moment().format('YYYY-MM-DD');

    // client.getTables((err, tables) => {
    //   console.log(tables);
    // });
    // const result_pv = await this.app.mysql.select('result_pv');
    // const result_uv = await this.app.mysql.select('result_uv');
    // const result_status = await this.app.mysql.select('result_status');
    // const result_top10 = await this.app.mysql.select('result_top3');
    const result_province = await this.app.mysql.select('result_province', {
      where: {
        day: '2020-05-19',
      },
    });
    console.log('this', letDate, result_province);
    // const result_os = await this.app.mysql.select('result_os');
    // const result_search = await this.app.mysql.select('result_search');
    // console.log('result', results);
    ctx.body = {
      // result_pv,
      // result_uv,
      // result_status,
      // result_top10,
      // result_os,
      // result_search,
      result_province,
    };
  }
}

module.exports = HomeController;
