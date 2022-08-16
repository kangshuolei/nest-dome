import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("banner", { schema: "naive-admin" })
export class Banner {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", comment: "名称", length: 255 })
  name: string;

  @Column("varchar", { name: "url", comment: "路径", length: 255 })
  url: string;

  @Column("int", { name: "sort", nullable: true, comment: "排序" })
  sort: number | null;

  @Column("int", {
    name: "status",
    nullable: true,
    comment: "0:正常 1:下架",
    default: () => "'0'",
  })
  status: number | null;

  @Column("int", {
    name: "sub",
    nullable: true,
    comment: "进一步了解 0:有  1:无",
  })
  sub: number | null;

  @Column("int", { name: "jump", nullable: true, comment: "试用 0:有 1:无" })
  jump: number | null;

  @Column("varchar", {
    name: "jump_url",
    nullable: true,
    comment: "试用跳转链接",
    length: 255,
  })
  jumpUrl: string | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("varchar", { name: "create_by", nullable: true, length: 255 })
  createBy: string | null;

  @Column("datetime", { name: "update_by", nullable: true })
  updateBy: Date | null;
}
