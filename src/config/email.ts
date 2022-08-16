/*
 * @Author: Kang
 * @Date: 2022-07-03 13:34:15
 * @Last Modified by: Kang
 * @LastEditTime: 2022-08-14 18:23:00
 */
import { join } from 'path';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';

const devEmailConfig = {
  transport: {
    host: 'smtp.163.com',
    port: 465,
    ignoreTLS: true,
    secure: true,
    auth: {
      user: '17692388891@163.com',
      pass: 'DDGCIWUFYRXMPKYS',
    },
  },
  defaults: {
    from: '"ahzd" <17692388891@163.com>',
  },
  preview: false,
  template: {
    dir: process.cwd() + '/template/',
    adapter: new PugAdapter(), // or new PugAdapter() or new EjsAdapter()
    options: {
      strict: true,
    },
  },
};
const prodEmailConfig = {
  transport: {
    host: 'smtp.126.com',
    port: 25,
    ignoreTLS: true,
    secure: false,
    auth: {
      user: '你的邮箱地址',
      pass: '刚才复制的密码',
    },
  },
  defaults: {
    from: '"名字" <你的邮箱地址>',
  },
  preview: false,
  template: {
    dir: process.cwd() + '/template/',
    adapter: new PugAdapter(), // or new PugAdapter() or new EjsAdapter()
    options: {
      strict: true,
    },
  },
};

const config = process.env.NODE_ENV ? prodEmailConfig : devEmailConfig;

export default config;
