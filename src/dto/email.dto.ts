/*
 * @Author: Kang
 * @Date: 2022-08-14 18:15:15
 * @Last Modified by: Kang
 * @LastEditTime: 2022-08-14 18:20:17
 */
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class emailDto {
  @IsNotEmpty({ message: '联系电话不能为空' })
  readonly phone: number;

  @IsNotEmpty({ message: '咨询内容不能为空' })
  readonly content: string;
}
