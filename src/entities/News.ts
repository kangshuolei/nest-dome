import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("news", { schema: "naive-admin" })
export class News {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("varchar", { name: "img_url", nullable: true, length: 255 })
  imgUrl: string | null;

  @Column("varchar", { name: "title", nullable: true, length: 255 })
  title: string | null;

  @Column("bigint", { name: "update_time", nullable: true })
  updateTime: string | null;

  @Column("text", { name: "text", nullable: true })
  text: string | null;

  @Column("bigint", { name: "create_time", nullable: true })
  createTime: string | null;

  @Column("int", { name: "type", nullable: true })
  type: number | null;

  @Column("varchar", { name: "home_img", nullable: true, length: 255 })
  homeImg: string | null;
}
