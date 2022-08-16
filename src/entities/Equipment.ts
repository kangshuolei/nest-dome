import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("equipment", { schema: "naive-admin" })
export class Equipment {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", {
    name: "title",
    nullable: true,
    comment: "主标题",
    length: 255,
  })
  title: string | null;

  @Column("varchar", {
    name: "sub_title",
    nullable: true,
    comment: "副标题",
    length: 255,
  })
  subTitle: string | null;

  @Column("varchar", {
    name: "img_url",
    nullable: true,
    comment: "封面url",
    length: 255,
  })
  imgUrl: string | null;

  @Column("text", { name: "content", nullable: true, comment: "内容" })
  content: string | null;

  @Column("int", { name: "user_id", nullable: true, comment: "1:安合 2:强安" })
  userId: number | null;

  @Column("bigint", { name: "create_time", nullable: true })
  createTime: string | null;

  @Column("bigint", { name: "update_time", nullable: true })
  updateTime: string | null;
}
