/*
 * @Author: Kang
 * @Date: 2022-08-09 19:00:19
 * @Last Modified by: Kang
 * @LastEditTime: 2022-08-09 19:10:28
 */
import { Module } from '@nestjs/common';
import { NewPushService } from './new-push.service';
import { NewPushController } from './new-push.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { News } from 'src/entities/News';

@Module({
  imports: [TypeOrmModule.forFeature([News])],
  controllers: [NewPushController],
  providers: [NewPushService],
})
export class NewPushModule {}
