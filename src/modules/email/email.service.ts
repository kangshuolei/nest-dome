/*
 * @Author: Kang
 * @Date: 2022-08-14 18:04:35
 * @Last Modified by: Kang
 * @LastEditTime: 2022-08-14 18:30:50
 */
import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { formatTime } from 'src/utils/utils';

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}
  /**
   * 邮件发送
   */
  async sendEmail(subject, data): Promise<any> {
    this.mailerService
      .sendMail({
        to: '2374500210@qq.com,fxe8891@dingtalk.com',
        from: '17692388891@163.com',
        subject,
        html: `公司名称: ${data.companyName}<br>客户姓名：${
          data.name
        }<br>联系电话：${data.phone}<br>邮箱：${data.email}<br>咨询内容：${
          data.content
        }<br>提交时间：${formatTime(new Date())}`,
      })
      .then(() => {})
      .catch(() => {});
  }
}
