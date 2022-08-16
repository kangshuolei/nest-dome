import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("customer", { schema: "naive-admin" })
export class Customer {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "company_name", nullable: true, length: 255 })
  companyName: string | null;

  @Column("varchar", { name: "phone", nullable: true, length: 255 })
  phone: string | null;

  @Column("bigint", { name: "create_time", nullable: true })
  createTime: string | null;
}
