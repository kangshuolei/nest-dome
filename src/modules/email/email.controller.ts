/*
 * @Author: Kang
 * @Date: 2022-08-14 18:04:35
 * @Last Modified by: Kang
 * @LastEditTime: 2022-08-14 18:25:11
 */
import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { EmailService } from './email.service';
import { emailDto } from 'src/dto/email.dto';

@Controller('api')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('/sendEmail')
  @UsePipes(new ValidationPipe())
  addCaseShow(@Body(new ValidationPipe()) emailDto: emailDto): Promise<any> {
    return this.emailService.sendEmail(
      '安合众道官网咨询客户信息(' + emailDto.phone + ')',
      emailDto,
    );
  }
}
