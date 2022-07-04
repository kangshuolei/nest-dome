/*
 * @Author: Kang
 * @Date: 2022-07-02 15:27:45
 * @Last Modified by: Kang
 * @LastEditTime: 2022-07-03 22:57:48
 */
import {
  Body,
  Controller,
  Get,
  Post,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { Posts } from '../../entities/Posts';
import { CreatePostsDto } from '../../dto/posts.dto';
import { HttpReqTransformInterceptor } from 'src/interceptor/http-req.interceptor';

@Controller('posts')
@UseInterceptors(new HttpReqTransformInterceptor<any>()) // 统一返回体
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getPostsAllList(): Promise<Posts[]> {
    return this.postsService.findAll();
  }
  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body(new ValidationPipe()) createPostsDto: CreatePostsDto) {
    return this.postsService.create(createPostsDto);
  }
}
