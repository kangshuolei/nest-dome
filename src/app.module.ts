/*
 * @Author: Kang
 * @Date: 2022-07-02 15:04:46
 * @Last Modified by: Kang
 * @LastEditTime: 2022-07-06 22:40:51
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './modules/posts/posts.module';
import { UsersModule } from './modules/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from 'nestjs-config';
import { JwtStrategy } from './modules/auth/jwt.strategy';
import { MulterModule } from '@nestjs/platform-express';
import { join } from 'path';
import { randomUUID } from 'crypto';
import { UploadModule } from './modules/upload/upload.module';
import { JobModule } from './modules/job/job.module';
const path = require('path');
@Module({
  imports: [
    ConfigModule.load(path.resolve(__dirname, 'config', '**/!(*.d).{ts,js}')),
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => config.get('database'),
      inject: [ConfigService],
    }),
    UploadModule,
    PostsModule,
    UsersModule,
    JobModule,
  ],
  controllers: [AppController],
  providers: [AppService, JwtStrategy],
})
export class AppModule {}
