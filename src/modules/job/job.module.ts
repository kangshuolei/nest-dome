/*
 * @Author: Kang
 * @Date: 2022-07-06 22:40:39
 * @Last Modified by: Kang
 * @LastEditTime: 2022-07-06 22:46:47
 */
import { Module } from '@nestjs/common';
import { JobService } from './job.service';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [ScheduleModule.forRoot()],
  controllers: [],
  providers: [JobService],
})
export class JobModule {}
