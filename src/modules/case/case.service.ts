/*
 * @Author: Kang
 * @Date: 2022-08-14 10:36:07
 * @Last Modified by: Kang
 * @LastEditTime: 2022-08-14 15:19:55
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Example } from 'src/entities/Example';
import { Repository } from 'typeorm';

@Injectable()
export class CaseService {
  constructor(
    @InjectRepository(Example)
    private caseModel: Repository<Example>,
  ) {}

  async findAll(query): Promise<any> {
    const { size = 10, page = 1, title = '' } = query;
    let index = (parseInt(page) - 1) * parseInt(size);
    const sql = `
      SELECT
        * 
      FROM 
        example 
      where 
        title LIKE '%${title}%'
        LIMIT ${index},${parseInt(size)};
    `;
    const numberSql = `
      SELECT 
        COUNT(*) as sum
      FROM 
        example 
      where 
        title LIKE '%${title}%'
    `;
    try {
      //获取数据总数
      const total = (await this.caseModel.query(numberSql))[0];
      //获取分页数据
      const newList = await this.caseModel.query(sql);
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

  async addCase(data): Promise<any> {
    const {
      title,
      text,
      imgUrl,
      userId,
      cloum1,
      cloum2,
      cloum3 = '',
      cloum4 = '',
    } = data;
    const sql = `
      INSERT 
        INTO 
      example(title, text, img_url,user_id,create_time, update_time, cloum1, cloum2, cloum3, cloum4) 
        VALUES 
      (
        '${title}', 
        '${text}', 
        '${imgUrl}', 
        '${userId}', 
        ${new Date().getTime()}, 
        ${new Date().getTime()},
        '${cloum1}',
        '${cloum2}',
        '${cloum3}',
        '${cloum4}'
      );
    `;
    try {
      await this.caseModel.query(sql);
    } catch (error) {
      console.log(error);
    }
  }

  async putCase(data): Promise<any> {
    const {
      title,
      text,
      imgUrl,
      id,
      cloum1,
      cloum2,
      cloum3 = '',
      cloum4 = '',
    } = data;
    const sql = `
      UPDATE 
        example 
      SET 
        title = '${title}', 
        text = '${text}',
        img_url = '${imgUrl}',
        update_time = ${new Date().getTime()},
        cloum1 = '${cloum1}',
        cloum2 = '${cloum2}',
        cloum3 = '${cloum3}',
        cloum4 = '${cloum4}'
      WHERE 
        id = ${id}
    `;
    try {
      await this.caseModel.query(sql);
    } catch (error) {
      console.log(error);
    }
  }

  async deleteCase(params): Promise<any> {
    const { id } = params;
    const sql = `
      DELETE FROM
        example
      WHERE
        id = ${id}
    `;
    try {
      await this.caseModel.query(sql);
    } catch (error) {
      console.log(error);
    }
  }
}
