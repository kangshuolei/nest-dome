/*
 * @Author: Kang
 * @Date: 2022-07-03 22:56:36
 * @Last Modified by: Kang
 * @LastEditTime: 2022-07-03 22:59:22
 */
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  data: T;
}

@Injectable()
export class HttpReqTransformInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    return next
      .handle()
      .pipe(
        map((data) => ({ data, code: 200, msg: '操作成功', success: true })),
      );
  }
}
