/*
 * @Author: Kang
 * @Date: 2022-07-02 15:04:46
 * @Last Modified by: Kang
 * @LastEditTime: 2022-07-03 12:41:15
 */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
const path = require('path');

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log(path.resolve(__dirname, '.', 'config', '**/!(*.d).{ts,js}'));
    return this.appService.getHello();
  }
}
