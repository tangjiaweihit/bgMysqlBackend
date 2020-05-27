'use strict';
// const moment = require('moment');
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const {
      ctx,
    } = this;
    // const letDate = moment().format('YYYY-MM-DD');
    const result_province = await this.app.mysql.select('result_province', {
      where: {
        day: ctx.params.date,
      },
    });
    // console.log('this', ctx.params.date, result_province);
    ctx.body = {
      result_province,
    };
  }
}

module.exports = HomeController;
