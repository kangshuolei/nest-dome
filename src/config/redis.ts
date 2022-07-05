/*
 * @Author: Kang
 * @Date: 2022-07-03 13:34:15
 * @Last Modified by: Kang
 * @LastEditTime: 2022-07-05 23:05:05
 */
import { join } from 'path';
import { RedisModuleOptions } from 'nestjs-redis';
const devDatabase: RedisModuleOptions = {
  host: '127.0.0.1',
  port: 6379,
  username: 'root',
  password: '123456',
  db: 0,
};
const productDatabase: RedisModuleOptions = {
  host: '127.0.0.1',
  port: 6379,
  username: 'root',
  password: '123456',
  db: 0,
};

const config = process.env.NODE_ENV ? productDatabase : devDatabase;

export default config;
