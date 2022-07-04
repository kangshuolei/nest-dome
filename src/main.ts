/*
 * @Author: Kang
 * @Date: 2022-07-02 15:04:46
 * @Last Modified by: Kang
 * @LastEditTime: 2022-07-03 23:40:53
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from './interceptor/transform.interceptor';
import { AllExceptionsFilter } from './filter/any-exception.filter';
import { HttpExceptionFilter } from './filter/http-exception.filter';
import { logger } from './middleware/logger.middleware';
// import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //日志相关
  app.use(logger); // 所有请求都打印日志
  // app.useGlobalInterceptors(new TransformInterceptor()); // 使用全局拦截器 收集日志

  // 错误异常捕获 和 过滤处理
  app.useGlobalFilters(new AllExceptionsFilter());
  app.useGlobalFilters(new HttpExceptionFilter()); // 全局统一异常返回体

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
