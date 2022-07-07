/*
 * @Author: Kang
 * @Date: 2022-07-02 15:04:46
 * @Last Modified by: Kang
 * @LastEditTime: 2022-07-07 23:12:13
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './modules/posts/posts.module';
import { UsersModule } from './modules/users/users.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from './modules/auth/jwt.strategy';
import configuration from 'src/config/index';
import { UploadModule } from './modules/upload/upload.module';
import { JobModule } from './modules/job/job.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      load: [configuration],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          type: 'mysql',
          entities: [`${__dirname}/*/*/entities!(*.d).{ts,js}`],
          keepConnectionAlive: true,
          ...config.get('db.mysql'),
        } as TypeOrmModuleOptions;
      },
    }),
    // UploadModule,
    PostsModule,
    UsersModule,
    JobModule,
  ],
  controllers: [AppController],
  providers: [AppService, JwtStrategy],
})
export class AppModule {}
