import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("example", { schema: "naive-admin" })
export class Example {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", {
    name: "title",
    nullable: true,
    comment: "标题",
    length: 255,
  })
  title: string | null;

  @Column("varchar", {
    name: "img_url",
    nullable: true,
    comment: "封面图",
    length: 255,
  })
  imgUrl: string | null;

  @Column("varchar", {
    name: "top_url",
    nullable: true,
    comment: "顶部图",
    length: 255,
  })
  topUrl: string | null;

  @Column("text", { name: "text", nullable: true, comment: "详情内容" })
  text: string | null;

  @Column("int", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("bigint", { name: "create_time", nullable: true })
  createTime: string | null;

  @Column("bigint", { name: "update_time", nullable: true })
  updateTime: string | null;

  @Column("bigint", { name: "push_time", nullable: true, comment: "发布时间" })
  pushTime: string | null;

  @Column("varchar", { name: "sorts", nullable: true, length: 255 })
  sorts: string | null;

  @Column("varchar", {
    name: "desc",
    nullable: true,
    comment: "首页内容",
    length: 1024,
  })
  desc: string | null;

  @Column("varchar", {
    name: "cloum1",
    nullable: true,
    comment: "分段1",
    length: 1024,
  })
  cloum1: string | null;

  @Column("varchar", {
    name: "cloum2",
    nullable: true,
    comment: "分段2",
    length: 1024,
  })
  cloum2: string | null;

  @Column("varchar", {
    name: "cloum3",
    nullable: true,
    comment: "分段3",
    length: 1024,
  })
  cloum3: string | null;

  @Column("varchar", {
    name: "cloum4",
    nullable: true,
    comment: "分段4",
    length: 1024,
  })
  cloum4: string | null;
}
