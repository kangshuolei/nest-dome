/*
 * @Author: Kang
 * @Date: 2022-08-09 19:00:19
 * @Last Modified by: Kang
 * @LastEditTime: 2022-08-13 23:54:16
 */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RbacGuard } from 'src/guards/rbac.guard';
import {
  NewsDto,
  addNewsDTO,
  putNewsDTO,
  deleteNewsDTO,
} from 'src/dto/news.dto';
import { NewPushService } from './new-push.service';

@Controller('api')
export class NewPushController {
  constructor(private readonly newPushService: NewPushService) {}

  @Get('/getNewsList')
  // @UseGuards(new RbacGuard(role.SUPER_ADMIN)) //守卫判断权限
  // @UseGuards(AuthGuard('jwt')) // 使用 'JWT' 进行验证
  getPostsAllList(
    @Query(new ValidationPipe())
    newsDto: NewsDto,
  ): Promise<any> {
    return this.newPushService.findAll(newsDto);
  }

  @Post('/getNewsList')
  @UsePipes(new ValidationPipe())
  postPostsAllList(@Body(new ValidationPipe()) addNewsDTO: addNewsDTO) {
    return this.newPushService.addNews(addNewsDTO);
  }

  @Put('/getNewsList')
  @UsePipes(new ValidationPipe())
  putPostsAllList(@Body(new ValidationPipe()) putNewsDTO: putNewsDTO) {
    return this.newPushService.putNews(putNewsDTO);
  }

  @Delete('/getNewsList')
  @UsePipes(new ValidationPipe())
  dletePostsAllList(@Query(new ValidationPipe()) deleteNewsDTO: deleteNewsDTO) {
    return this.newPushService.deleteNews(deleteNewsDTO);
  }
}
