/*
 * @Author: Kang
 * @Date: 2022-07-04 23:23:20
 * @Last Modified by: Kang
 * @LastEditTime: 2022-07-04 23:30:35
 */
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class LoginDto {
  @IsNotEmpty({ message: '用户名不能为空' })
  readonly username: string;

  @IsNotEmpty({ message: '密码不能为空' })
  readonly password: string;
}

export class RegisterInfoDTO {
  @IsNotEmpty({ message: '用户名不能为空' })
  readonly accountName: string;

  @IsNotEmpty({ message: '真实姓名不能为空' })
  @IsString({ message: '真实姓名必须是 String 类型' })
  readonly realName: string;

  @IsNotEmpty({ message: '密码不能为空' })
  readonly password: string;

  @IsNotEmpty({ message: '重复密码不能为空' })
  readonly repassword: string;

  @IsNotEmpty({ message: '手机号不能为空' })
  @IsNumber()
  readonly mobile: number;

  readonly role?: number | string;
}
