/*
 * @Author: Kang
 * @Date: 2022-07-03 13:34:15
 * @Last Modified by: Kang
 * @LastEditTime: 2022-07-05 22:19:21
 */
import { join } from 'path';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const devDatabase: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'nest',
  entities: [join(__dirname, '../../', 'entities', '**/!(*.d).{ts,js}')], //自动检测包含entity的文件，并引入
};
const productDatabase: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'nest',
  entities: [join(__dirname, '../../', 'entities', '**/!(*.d).{ts,js}')], //自动检测包含entity的文件，并引入
};

const config = process.env.NODE_ENV ? productDatabase : devDatabase;

export default config;
