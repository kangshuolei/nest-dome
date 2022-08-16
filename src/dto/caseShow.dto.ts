/*
 * @Author: Kang
 * @Date: 2022-07-04 23:23:20
 * @Last Modified by: Kang
 * @LastEditTime: 2022-08-14 14:24:26
 */
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class caseShowDto {
  @IsNotEmpty({ message: 'page不能为空' })
  // @IsNumber()
  readonly page: number;

  @IsNotEmpty({ message: 'size不能为空' })
  // @IsNumber()
  readonly size: number;
}

export class addCaseDTO {
  @IsNotEmpty({ message: '标题不能为空' })
  readonly title: string;

  @IsNotEmpty({ message: '内容不能为空' })
  @IsString({ message: '内容必须是 String 类型' })
  readonly text: string;

  @IsNotEmpty({ message: '案例封面不能为空' })
  readonly imgUrl: string;

  @IsNotEmpty({ message: '用户ID不能为空' })
  readonly userId: number;

  @IsNotEmpty({ message: '片段内容1不能为空' })
  readonly cloum1: string;

  @IsNotEmpty({ message: '片段内容2不能为空' })
  readonly cloum2: string;
}

export class putCaseDTO {
  @IsNotEmpty({ message: '标题不能为空' })
  readonly title: string;

  @IsNotEmpty({ message: '内容不能为空' })
  @IsString({ message: '内容必须是 String 类型' })
  readonly text: string;

  @IsNotEmpty({ message: '案例封面不能为空' })
  readonly imgUrl: string;

  @IsNotEmpty({ message: 'id不能为空' })
  readonly id: number;

  @IsNotEmpty({ message: '片段内容1不能为空' })
  readonly cloum1: string;

  @IsNotEmpty({ message: '片段内容2不能为空' })
  readonly cloum2: string;
}

export class deleteCaseDTO {
  @IsNotEmpty({ message: 'id不能为空' })
  readonly id: number;
}
