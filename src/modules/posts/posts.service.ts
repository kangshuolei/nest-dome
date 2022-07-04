/*
 * @Author: Kang
 * @Date: 2022-07-02 15:28:24
 * @Last Modified by: Kang
 * @LastEditTime: 2022-07-03 22:17:47
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Posts } from '../../entities/Posts';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Posts)
    private postsModel: Repository<Posts>,
  ) {}

  async findAll(): Promise<Posts[]> {
    return this.postsModel.find();
  }
  async create(createPostsDto): Promise<Posts[]> {
    return createPostsDto;
  }
}
