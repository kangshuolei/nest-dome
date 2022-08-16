/*
 * @Author: Kang
 * @Date: 2022-08-05 13:13:28
 * @Last Modified by: Kang
 * @LastEditTime: 2022-08-14 22:04:12
 */
import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { LoginDto, RegisterInfoDTO } from '../../dto/users.dto';
import { AuthService } from '../auth/auth.service';

@Controller('api')
export class UsersController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  /**
   *
   * @param loginDto 用户登录
   */

  @Post('/users/login')
  @UsePipes(new ValidationPipe())
  async login(@Body(new ValidationPipe()) loginDto: LoginDto) {
    console.log('JWT验证 - 用户请求登录');
    const authResult = await this.authService.validateUser(
      loginDto.username,
      loginDto.password,
    );
    console.log('authResult', authResult);
    switch (authResult.code) {
      case 1:
        return this.authService.certificate(authResult.user);
      case 2:
        throw new HttpException('账号或密码不正确', 600);
      default:
        // return {
        //   code: 600,
        //   msg: `该用户不存在！`,
        // };
        throw new HttpException('该用户不存在', 600);
    }
  }

  /**
   * 注册用户
   * @param registerInfoDTO 注册信息
   * @returns
   */
  @Post('register')
  @UsePipes(new ValidationPipe())
  async registerUser(
    @Body(new ValidationPipe()) registerInfoDTO: RegisterInfoDTO,
  ) {
    return this.usersService.register(registerInfoDTO);
  }
}
