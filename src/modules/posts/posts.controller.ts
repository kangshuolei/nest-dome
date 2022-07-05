/*
 * @Author: Kang
 * @Date: 2022-07-02 15:27:45
 * @Last Modified by: Kang
 * @LastEditTime: 2022-07-05 14:49:10
 */
import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { Posts } from '../../entities/Posts';
import { CreatePostsDto } from '../../dto/posts.dto';
import { HttpReqTransformInterceptor } from 'src/interceptor/http-req.interceptor';
import { AuthGuard } from '@nestjs/passport';

@Controller('posts')
@UseInterceptors(new HttpReqTransformInterceptor<any>()) // 统一返回体
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getPostsAllList(): Promise<Posts[]> {
    return this.postsService.findAll();
  }

  @UseGuards(AuthGuard('jwt')) // 使用 'JWT' 进行验证
  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body(new ValidationPipe()) createPostsDto: CreatePostsDto) {
    return this.postsService.create(createPostsDto);
  }
}
