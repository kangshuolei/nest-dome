/*
 * @Author: Kang
 * @Date: 2022-07-06 22:40:39
 * @Last Modified by: Kang
 * @LastEditTime: 2022-07-06 23:07:19
 */
import { Injectable } from '@nestjs/common';
import { Cron, Interval } from '@nestjs/schedule';
import { Logger } from 'src/utils/log4js';

@Injectable()
export class JobService {
  /**
   * 定时
   */
  // @Cron('45 * * * * *')
  handleCron() {
    Logger.debug('该方法将在45秒标记出每分钟运行一次');
  }
  /**
   * Interval 循环
   */
  // @Interval(10000)
  handleInterval() {
    Logger.debug('每10秒执行一次');
  }

  /**
   * 手动运行
   */
  // @Cron('* * * * * *', { name: 'notifications' })
  handleManual() {
    Logger.debug('通过调用其他接口，来触发这个定时...');
  }
}
