/*
 * @Author: Kang
 * @Date: 2022-07-06 13:59:04
 * @Last Modified by: Kang
 * @LastEditTime: 2022-07-06 20:33:20
 */
const { v4: uuidv4 } = require('uuid');
const moment = require('moment');

/**
 * 生成uuid
 * @returns
 */
export function getUUID() {
  return uuidv4();
}

export function formatTime(date, format = 'YYYY-MM-DD') {
  return moment(date).format(format);
}
