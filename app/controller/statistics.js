'use strict';
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const {
      ctx,
    } = this;
    const result_pv = await this.app.mysql.select('result_pv', {
      where: {
        day: ctx.params.date,
      },
    });
    const result_uv = await this.app.mysql.select('result_uv', {
      where: {
        day: ctx.params.date,
      },
    });
    const result_status = await this.app.mysql.select('result_status', {
      where: {
        day: ctx.params.date,
      },
    });
    const result_top3 = await this.app.mysql.select('result_top3', {
      where: {
        day: ctx.params.date,
      },
    });
    const result_course = await this.app.mysql.select('course');
    console.log('-->>', result_course);
    const result_search = await this.app.mysql.select('result_search', {
      where: {
        day: ctx.params.date,
      },
    });
    const result_os_cnt = await this.app.mysql.select('result_os_cnt', {
      where: {
        day: ctx.params.date,
      },
    });
    ctx.body = {
      result_pv,
      result_uv,
      result_status,
      result_top3,
      result_search,
      result_course,
      result_os_cnt,
    };
  }
}

module.exports = HomeController;
