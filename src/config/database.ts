/*
 * @Author: Kang
 * @Date: 2022-07-03 13:34:15
 * @Last Modified by: Kang
 * @LastEditTime: 2022-08-08 21:10:00
 */
import { join } from 'path';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const devDatabase: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '49.233.199.152',
  port: 6036,
  username: 'root',
  password: 'Ahzd12#$',
  database: 'naive-admin',
  entities: [join(__dirname, '../../', 'entities', '**/!(*.d).{ts,js}')], //自动检测包含entity的文件，并引入
};
const productDatabase: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '49.233.199.152',
  port: 6036,
  username: 'root',
  password: 'Ahzd12',
  database: 'naive-admin',
  entities: [join(__dirname, '../../', 'entities', '**/!(*.d).{ts,js}')], //自动检测包含entity的文件，并引入
};

const config = process.env.NODE_ENV ? productDatabase : devDatabase;

export default config;
