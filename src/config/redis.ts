/*
 * @Author: Kang
 * @Date: 2022-07-03 13:34:15
 * @Last Modified by: Kang
 * @LastEditTime: 2022-08-08 21:14:54
 */
import { join } from 'path';
import { RedisModuleOptions } from 'nestjs-redis';

const devDatabase: RedisModuleOptions = {
  host: '49.233.199.152',
  port: 6079,
  username: '',
  password: '',
  db: 0,
};
const productDatabase: RedisModuleOptions = {
  host: '49.233.199.152',
  port: 6079,
  username: '',
  password: '',
  db: 0,
};

const config = process.env.NODE_ENV ? productDatabase : devDatabase;

export default config;
