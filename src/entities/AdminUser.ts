/*
 * @Author: Kang
 * @Date: 2022-07-04 23:22:07
 * @Last Modified by: Kang
 * @LastEditTime: 2022-07-04 23:37:14
 */
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('idx_m', ['mobile'], {})
@Entity('admin_user', { schema: 'nest' })
export class UserModel {
  @PrimaryGeneratedColumn({
    type: 'smallint',
    name: 'user_id',
    comment: '用户ID',
  })
  userId: number;

  @Column('varchar', { name: 'account_name', comment: '用户账号', length: 24 })
  accountName: string;

  @Column('varchar', { name: 'real_name', comment: '真实姓名', length: 20 })
  realName: string;

  @Column('char', { name: 'passwd', comment: '密码', length: 32 })
  passwd: string;

  @Column('char', { name: 'passwd_salt', comment: '密码盐', length: 6 })
  passwdSalt: string;

  @Column('varchar', {
    name: 'mobile',
    comment: '手机号码',
    length: 15,
    default: () => "'0'",
  })
  mobile: string;

  @Column('tinyint', {
    name: 'role',
    comment:
      '用户角色：0-超级管理员|1-管理员|2-开发&测试&运营|3-普通用户（只能查看）',
    default: () => "'3'",
  })
  role: number;

  @Column('tinyint', {
    name: 'user_status',
    comment: '状态：0-失效|1-有效|2-删除',
    default: () => "'0'",
  })
  userStatus: number;

  @Column('smallint', { name: 'create_by', comment: '创建人ID' })
  createBy: number;

  @Column('timestamp', {
    name: 'create_time',
    comment: '创建时间',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createTime: Date;

  @Column('smallint', {
    name: 'update_by',
    comment: '修改人ID',
    default: () => "'0'",
  })
  updateBy: number;

  @Column('timestamp', {
    name: 'update_time',
    comment: '修改时间',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updateTime: Date;
}
