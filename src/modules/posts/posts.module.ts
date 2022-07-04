/*
 * @Author: Kang
 * @Date: 2022-07-02 15:27:08
 * @Last Modified by: Kang
 * @LastEditTime: 2022-07-03 22:10:12
 */
import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { Posts } from '../../entities/Posts';
import { SequelizeModule } from '@nestjs/sequelize';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Posts])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
