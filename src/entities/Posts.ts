import { Column, Entity } from "typeorm";

@Entity("posts", { schema: "nest" })
export class Posts {
  @Column("int", { primary: true, name: "id", comment: "id 自增" })
  id: number;

  @Column("varchar", {
    name: "firstName",
    nullable: true,
    comment: "名字",
    length: 255,
  })
  firstName: string | null;

  @Column("varchar", {
    name: "lastName",
    nullable: true,
    comment: "姓",
    length: 255,
  })
  lastName: string | null;

  @Column("tinyint", {
    name: "isActive",
    nullable: true,
    comment: "激活状态  true未激活，false为未激活",
    width: 1,
  })
  isActive: boolean | null;
}
