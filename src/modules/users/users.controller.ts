import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { LoginDto, RegisterInfoDTO } from '../../dto/users.dto';
import { AuthService } from '../auth/auth.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  /**
   *
   * @param loginDto 用户登录
   */

  @Post('login')
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
        return {
          code: 600,
          msg: `账号或密码不正确`,
        };
      default:
        return {
          code: 600,
          msg: `查无此人`,
        };
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
