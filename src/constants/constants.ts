/*
 * @Author: Kang
 * @Date: 2022-07-05 09:15:18
 * @Last Modified by: Kang
 * @LastEditTime: 2022-07-06 09:04:38
 */
/**
 * 用于 验证 jwt的秘钥
 */
export const jwtConstants = {
  secret: 'xiaokang123', // 秘钥
};

/**
 * 用户角色权限
 */
export const roleConstans = {
  SUPER_ADMIN: 0, // 超级管理员
  ADMIN: 1, // 管理员
  DEVELOPER: 2, // 开发者（测试、运营具有同一权限，若提升为 RBAC 1 以上，则可酌情分开）
  HUMAN: 3, // 普通用户
};
