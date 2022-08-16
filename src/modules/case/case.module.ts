/*
 * @Author: Kang
 * @Date: 2022-08-14 10:36:07
 * @Last Modified by: Kang
 * @LastEditTime: 2022-08-14 13:48:48
 */
import { Module } from '@nestjs/common';
import { CaseService } from './case.service';
import { CaseController } from './case.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Example } from 'src/entities/Example';

@Module({
  imports: [TypeOrmModule.forFeature([Example])],
  controllers: [CaseController],
  providers: [CaseService],
})
export class CaseModule {}
