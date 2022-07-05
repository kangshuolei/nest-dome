/*
 * @Author: Kang
 * @Date: 2022-07-05 23:23:42
 * @Last Modified by: Kang
 * @LastEditTime: 2022-07-05 23:32:06
 */
import Redis from 'ioredis';
import { Logger } from '../utils/log4js';
import config from 'src/config/redis';

let n: number = 0;
const redisIndex = []; //用于记录 redis 实例索引
const redisList = []; //用于存储 redis 实例

export class RedisInstance {
  static async initRedis(method: string, db: number = 0) {
    const isExist = redisIndex.some((x) => x === db);
    if (!isExist) {
      Logger.debug(
        `[Redis ${db}]来自 ${method} 方法调用, Redis 实例化了 ${++n} 次 `,
      );
      redisList[db] = new Redis({ ...config, db });
      redisIndex.push(db);
    } else {
      Logger.debug(`[Redis ${db}]来自 ${method} 方法调用`);
    }
    return redisList[db];
  }
}
