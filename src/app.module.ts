/*
 * @Author: Kang
 * @Date: 2022-07-02 15:04:46
 * @Last Modified by: Kang
 * @LastEditTime: 2022-08-14 19:30:13
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './modules/posts/posts.module';
import { UsersModule } from './modules/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigModule, ConfigService } from 'nestjs-config';
import { JwtStrategy } from './modules/auth/jwt.strategy';
import { MulterModule } from '@nestjs/platform-express';
import { join } from 'path';
import { randomUUID } from 'crypto';
import { UploadModule } from './modules/upload/upload.module';
import { JobModule } from './modules/job/job.module';
import { NewPushModule } from './modules/new-push/new-push.module';
import { CaseModule } from './modules/case/case.module';
import { EmailModule } from './modules/email/email.module';
const path = require('path');
@Module({
  imports: [
    ConfigModule.load(path.resolve(__dirname, 'config', '**/!(*.d).{ts,js}')),
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => config.get('database'),
      inject: [ConfigService],
    }),
    MailerModule.forRootAsync({
      useFactory: (config: ConfigService) => config.get('email'),
      inject: [ConfigService],
    }),
    UploadModule,
    PostsModule,
    UsersModule,
    JobModule,
    NewPushModule,
    CaseModule,
    EmailModule,
  ],
  controllers: [AppController],
  providers: [AppService, JwtStrategy],
})
export class AppModule {}
