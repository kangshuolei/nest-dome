/*
 * @Author: Kang
 * @Date: 2022-07-04 23:18:57
 * @Last Modified by: Kang
 * @LastEditTime: 2022-07-05 13:58:38
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserModel } from '../../entities/AdminUser';
import { makeSalt, encryptPassword } from '../../utils/cryptogram'; // 引入加密函数

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserModel)
    private UserModel: Repository<UserModel>,
  ) {}

  /**
   *
   * @param username 用户名
   * @returns
   */
  async findOne(username: string): Promise<any | undefined> {
    const sql = `
      SELECT 
        user_id userId, account_name username, real_name realName, passwd password,
        passwd_salt salt, mobile, role
      FROM
        admin_user
      WHERE
        account_name = '${username}'
    `;
    try {
      const user = (await this.UserModel.query(sql))[0];
      //若查不到用户，则 user === undefined
      return user;
    } catch (error) {
      return void 0;
    }
  }

  async register(requestBody: any): Promise<any> {
    const { accountName, realName, password, repassword, mobile } = requestBody;
    if (password !== repassword) {
      return {
        code: 400,
        msg: '两次密码输入不一致',
      };
    }
    const user = await this.findOne(accountName);
    if (user) {
      return {
        code: 400,
        msg: '用户已存在',
      };
    }
    const salt = makeSalt(); //制作密码盐
    const hashPwd = encryptPassword(password, salt); //加密密码
    const registerSQL = `
      INSERT INTO admin_user
        (account_name, real_name, passwd, passwd_salt, mobile, user_status, role, create_by)
      VALUES
        ('${accountName}', '${realName}', '${hashPwd}', '${salt}', '${mobile}', 1, 3, 0)
    `;
    try {
      await this.UserModel.query(registerSQL);
      return {
        code: 200,
        mag: 'Success',
      };
    } catch (error) {
      return {
        code: 503,
        msg: `Service error: ${error}`,
      };
    }
  }
}
