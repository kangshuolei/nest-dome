/*
 * @Author: Kang
 * @Date: 2022-07-04 22:40:18
 * @Last Modified by: Kang
 * @LastEditTime: 2022-07-04 23:06:24
 */
import * as crypto from 'crypto';

/**
 * Make salt
 */
export function makeSalt(): string {
  return crypto.randomBytes(3).toString('base64');
}

/**
 *根据盐
 * @param password 密码
 * @param salt  密码盐
 * @returns
 */
export function encryptPassword(password: string, salt: string): string {
  if (!password || !salt) {
    return '';
  }
  const tempSalt = Buffer.from(salt, 'base64');
  return (
    // 10000 代表迭代次数 16代表长度
    crypto.pbkdf2Sync(password, tempSalt, 10000, 16, 'sha1').toString('base64')
  );
}
