/*
 * @Author: Kang
 * @Date: 2022-07-02 15:04:46
 * @Last Modified by: Kang
 * @LastEditTime: 2022-07-05 23:22:56
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './modules/posts/posts.module';
import { UsersModule } from './modules/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from 'nestjs-config';
import { UsersController } from './modules/users/users.controller';
import { JwtStrategy } from './modules/auth/jwt.strategy';
import { RedisModule } from 'nestjs-redis';
import redisConfig from './config/redis';
const path = require('path');
@Module({
  imports: [
    PostsModule,
    UsersModule,
    ConfigModule.load(path.resolve(__dirname, 'config', '**/!(*.d).{ts,js}')),
    // RedisModule.register(redisConfig),
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => config.get('database'),
      inject: [ConfigService],
    }),
    // RedisModule.forRootAsync({
    //   useFactory: (config: ConfigService) => config.get('redis'),
    //   inject: [ConfigService],
    // }),
  ],
  controllers: [AppController],
  providers: [AppService, JwtStrategy],
})
export class AppModule {}
