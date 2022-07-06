/*
 * @Author: Kang
 * @Date: 2022-07-02 15:27:45
 * @Last Modified by: Kang
 * @LastEditTime: 2022-07-06 22:58:19
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
import { RbacInterceptor } from 'src/interceptor/rbac.interceptor';
import { roleConstans as role } from 'src/constants/constants';
import { RbacGuard } from 'src/guards/rbac.guard';
import { SchedulerRegistry } from '@nestjs/schedule';

@Controller('posts')
@UseInterceptors(new HttpReqTransformInterceptor<any>()) // 统一返回体
export class PostsController {
  constructor(
    private readonly postsService: PostsService,
    private readonly schedulerRegistry: SchedulerRegistry,
  ) {}
  /**
   * 测试定时任务触发
   * @returns
   */
  @Get()
  @UseGuards(new RbacGuard(role.SUPER_ADMIN)) //守卫判断权限
  @UseGuards(AuthGuard('jwt')) // 使用 'JWT' 进行验证
  getPostsAllList(): Promise<any> {
    return this.postsService.findAll();
  }

  @Post()
  @UseGuards(new RbacGuard(role.HUMAN)) //守卫判断权限
  @UseGuards(AuthGuard('jwt')) // 使用 'JWT' 进行验证
  @UsePipes(new ValidationPipe())
  async create(@Body(new ValidationPipe()) createPostsDto: CreatePostsDto) {
    return this.postsService.create(createPostsDto);
  }
}
