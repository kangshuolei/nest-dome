/*
 * @Author: Kang
 * @Date: 2022-07-02 15:28:24
 * @Last Modified by: Kang
 * @LastEditTime: 2022-07-06 09:17:51
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

  async findAll(): Promise<any> {
    // return this.postsModel.find();
    return '123';
  }
  async create(createPostsDto): Promise<Posts[]> {
    return createPostsDto;
  }
}
