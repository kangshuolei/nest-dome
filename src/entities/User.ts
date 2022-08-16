import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user", { schema: "naive-admin" })
export class User {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "username", nullable: true, length: 255 })
  username: string | null;

  @Column("varchar", { name: "password", nullable: true, length: 255 })
  password: string | null;

  @Column("bigint", { name: "created_time", nullable: true })
  createdTime: string | null;

  @Column("bigint", { name: "updated_time", nullable: true })
  updatedTime: string | null;

  @Column("int", { name: "user_id", nullable: true })
  userId: number | null;
}
