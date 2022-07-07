/*
 * @Author: Kang
 * @Date: 2022-07-06 11:41:12
 * @Last Modified by: Kang
 * @LastEditTime: 2022-07-07 21:22:20
 */
import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
import { MulterModule } from '@nestjs/platform-express';
import { ConfigModule, ConfigService } from 'nestjs-config';
import path, { join } from 'path';
import { randomUUID } from 'crypto';
import { diskStorage } from 'multer';
import { getUUID, formatTime } from 'src/utils/utils';
const fs = require('fs');
// 获取当前日期，用于文件夹创建
const dirName = formatTime(new Date());
// 指定上传路径
const uploadBasePath = '../../../upload';
// 文件重命名
const dir = join(__dirname, uploadBasePath);
// const src = path.join(__dirname, uploadBasePath, dirName, filename);
// 判断是否存在该文件夹，不存在则创建。
// if (!fs.existsSync(dir)) fs.mkdirSync(dir);

@Module({
  imports: [
    MulterModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        storage: diskStorage({
          destination: join(__dirname, '../../../upload'),
          filename: (req, file, cb) => {
            const filename = `${getUUID()}.${file.mimetype.split('/')[1]}`;
            return cb(null, filename);
          },
        }),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [UploadController],
  providers: [UploadService],
})
export class UploadModule {}
