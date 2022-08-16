/*
 * @Author: Kang
 * @Date: 2022-08-14 10:36:07
 * @Last Modified by: Kang
 * @LastEditTime: 2022-08-14 15:21:21
 */
import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CaseService } from './case.service';
import {
  caseShowDto,
  addCaseDTO,
  putCaseDTO,
  deleteCaseDTO,
} from 'src/dto/caseShow.dto';

@Controller('api')
export class CaseController {
  constructor(private readonly caseService: CaseService) {}

  @Get('/caseShow')
  @UsePipes(new ValidationPipe())
  getCaseShow(
    @Query(new ValidationPipe()) getCaseShowDto: caseShowDto,
  ): Promise<any> {
    return this.caseService.findAll(getCaseShowDto);
  }

  @Post('/caseShow')
  @UsePipes(new ValidationPipe())
  addCaseShow(
    @Body(new ValidationPipe()) addCaseDTO: addCaseDTO,
  ): Promise<any> {
    return this.caseService.addCase(addCaseDTO);
  }

  @Put('/caseShow')
  @UsePipes(new ValidationPipe())
  putCaseShow(
    @Body(new ValidationPipe()) putCaseDTO: putCaseDTO,
  ): Promise<any> {
    return this.caseService.putCase(putCaseDTO);
  }

  @Delete('/caseShow')
  @UsePipes(new ValidationPipe())
  deleteCaseShow(
    @Query(new ValidationPipe()) deleteCaseDTO: deleteCaseDTO,
  ): Promise<any> {
    return this.caseService.deleteCase(deleteCaseDTO);
  }
}
