/*
 * @Author: Kang
 * @Date: 2022-07-03 22:08:42
 * @Last Modified by: Kang
 * @LastEditTime: 2022-07-03 22:36:45
 */
import { IsNotEmpty, IsNumber } from 'class-validator';

// dto (Data Transfer Object) 数据传输对象
export class CreatePostsDto {
  id: number;

  @IsNotEmpty({ message: '名字不允许为空' })
  firstName: string;

  @IsNotEmpty({ message: '姓氏不允许为空' })
  lastName: string;

  @IsNotEmpty({ message: '是否激活状态不能为空' })
  @IsNumber()
  isActive: number;
}
