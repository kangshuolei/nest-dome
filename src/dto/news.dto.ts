/*
 * @Author: Kang
 * @Date: 2022-07-04 23:23:20
 * @Last Modified by: Kang
 * @LastEditTime: 2022-08-13 23:34:17
 */
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class NewsDto {
  @IsNotEmpty({ message: 'page不能为空' })
  // @IsNumber()
  readonly page: number;

  @IsNotEmpty({ message: 'size不能为空' })
  // @IsNumber()
  readonly size: number;
}

export class addNewsDTO {
  @IsNotEmpty({ message: '标题不能为空' })
  readonly title: string;

  @IsNotEmpty({ message: '内容不能为空' })
  @IsString({ message: '内容必须是 String 类型' })
  readonly text: string;

  @IsNotEmpty({ message: '新闻封面不能为空' })
  readonly imgUrl: string;

  @IsNotEmpty({ message: '用户ID不能为空' })
  readonly userId: number;
}

export class putNewsDTO {
  @IsNotEmpty({ message: '标题不能为空' })
  readonly title: string;

  @IsNotEmpty({ message: '内容不能为空' })
  @IsString({ message: '内容必须是 String 类型' })
  readonly text: string;

  @IsNotEmpty({ message: '新闻封面不能为空' })
  readonly imgUrl: string;

  @IsNotEmpty({ message: 'id不能为空' })
  readonly id: number;
}

export class deleteNewsDTO {
  @IsNotEmpty({ message: 'id不能为空' })
  readonly id: number;
}
