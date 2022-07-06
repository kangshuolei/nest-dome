/*
 * @Author: Kang
 * @Date: 2022-07-06 11:41:12
 * @Last Modified by: Kang
 * @LastEditTime: 2022-07-06 22:40:29
 */
import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service';
import { formatTime } from 'src/utils/utils';
import { HttpReqTransformInterceptor } from 'src/interceptor/http-req.interceptor';
import { lutimes } from 'fs';
const baseUrl = '/upload/' + formatTime(new Date()) + '/';

@Controller('upload')
@UseInterceptors(new HttpReqTransformInterceptor<any>()) // 统一返回体
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  /**
   * 单个文件上传
   * @param body Body参数
   * @param file 文件
   * @returns
   */
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@Body() body: any, @UploadedFile() file: any) {
    return {
      file: file.filename,
      path: baseUrl + file.filename,
      size: file.size,
      originalname: file.originalname,
      mimetype: file.mimetype,
    };
  }

  /**
   * 批量上传
   * @param body
   * @param files 多个文件
   * @returns
   */
  @Post('uploads')
  @UseInterceptors(FilesInterceptor('files'))
  uploadFiles(@Body() body: any, @UploadedFiles() files: Array<any>) {
    return files.map((item) => ({
      file: item.filename,
      path: baseUrl + item.filename,
      size: item.size,
      originalname: item.originalname,
      mimetype: item.mimetype,
    }));
  }
}
