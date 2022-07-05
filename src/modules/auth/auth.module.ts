/*
 * @Author: Kang
 * @Date: 2022-07-05 09:14:16
 * @Last Modified by: Kang
 * @LastEditTime: 2022-07-05 14:48:46
 */
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from 'src/constants/constants';
import { UserModel } from 'src/entities/AdminUser';
import { UsersService } from '../users/users.service';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '8h' }, //token 过期时间
    }),
    UserModel,
  ],
  controllers: [AuthController, JwtStrategy],
  providers: [AuthService, LocalStrategy, JwtService, UsersService],
})
export class AuthModule {}
