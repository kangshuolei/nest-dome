/*
 * @Author: Kang
 * @Date: 2022-08-09 19:00:19
 * @Last Modified by: Kang
 * @LastEditTime: 2022-08-14 00:00:38
 */
import { Injectable, Param, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { News } from 'src/entities/News';
import { Repository } from 'typeorm';

@Injectable()
export class NewPushService {
  constructor(
    @InjectRepository(News)
    private newsModel: Repository<News>,
  ) {}

  async findAll(query): Promise<any> {
    const { size = 10, page = 1, title = '' } = query;
    let index = (parseInt(page) - 1) * parseInt(size);
    const sql = `
      SELECT
        * 
      FROM 
        news 
      where 
        title LIKE '%${title}%'
        LIMIT ${index},${parseInt(size)};
    `;
    const numberSql = `
      SELECT 
        COUNT(*) as sum
      FROM 
        news 
      where 
        title LIKE '%${title}%'
    `;
    try {
      //获取数据总数
      const total = (await this.newsModel.query(numberSql))[0];
      //获取分页数据
      const newList = await this.newsModel.query(sql);
      let pages = Math.ceil(parseInt(total.sum) / parseInt(size));
      return {
        total: parseInt(total.sum), //总条数
        data: newList, //数据列表
        current: parseInt(page), //当前页
        size: parseInt(size), //单页条数
        pages, //页数
      };
    } catch (error) {
      console.log(error);
    }
  }

  async addNews(data): Promise<any> {
    const { title, text, imgUrl, userId } = data;
    const sql = `
      INSERT 
        INTO 
      news(title, text, img_url,user_id,create_time, update_time) 
        VALUES 
      ('${title}', '${text}', '${imgUrl}', '${userId}', ${new Date().getTime()}, ${new Date().getTime()});
    `;
    try {
      await this.newsModel.query(sql);
    } catch (error) {
      console.log(error);
    }
  }

  async putNews(data): Promise<any> {
    const { title, text, imgUrl, id } = data;
    const sql = `
      UPDATE 
        news 
      SET 
        title = '${title}', 
        text = '${text}',
        img_url = '${imgUrl}',
        update_time = ${new Date().getTime()}
      WHERE 
        id = ${id}
    `;
    try {
      await this.newsModel.query(sql);
    } catch (error) {
      console.log(error);
    }
  }

  async deleteNews(params): Promise<any> {
    const { id } = params;
    const sql = `
      DELETE FROM
        news
      WHERE
        id = ${id}
    `;
    try {
      await this.newsModel.query(sql);
    } catch (error) {
      console.log(error);
    }
  }
}
