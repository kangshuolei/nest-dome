/*
 * @Author: Kang
 * @Date: 2022-07-05 09:14:16
 * @Last Modified by: Kang
 * @LastEditTime: 2022-07-05 13:58:02
 */
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { encryptPassword } from 'src/utils/cryptogram';
import { jwtConstants } from 'src/constants/constants';
@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  //JWT验证 - 验证用户信息
  async validateUser(username: string, password: string): Promise<any> {
    console.log('JWT验证 - 校验用户信息');
    const user = await this.usersService.findOne(username);
    if (user) {
      const hashedPassword = user.password;
      const salt = user.salt;
      //通过密码盐，加密传参，再与数据库里的比较，判断是否相等
      const hashPassword = encryptPassword(password, salt);
      if (hashedPassword == hashPassword) {
        //密码正确
        return {
          code: 1,
          user,
        };
      } else {
        //密码错误
        return {
          code: 2,
          user: null,
        };
      }
    }
    //查无此人
    return {
      code: 3,
      user: null,
    };
  }

  //JWT验证 - 处理jwt 签证
  async certificate(user: any) {
    const payload = {
      username: user.username,
      sub: user.userId,
      realName: user.realName,
      role: user.role,
    };
    console.log('JWT验证 - 处理jwt签证');
    try {
      const token = this.jwtService.sign(payload, {
        secret: jwtConstants.secret,
      });
      return {
        code: 200,
        data: {
          token,
        },
        msg: `登录成功`,
      };
    } catch (error) {
      console.log(error);
      return {
        code: 600,
        msg: `账号或密码错误`,
      };
    }
  }
}
