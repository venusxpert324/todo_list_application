import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CoreEntity } from "./core.entity";

@Entity("todo")
export class TodoEntity extends CoreEntity {
  @PrimaryGeneratedColumn("increment")
  id;
  @Column({ type: "varchar", nullable: true })
  user_id;
  @Column({ type: "varchar", nullable: true })
  title;
  @Column({ type: "varchar", nullable: true })
  description;
  @Column({ type: "tinyint", default: 2 })
  status;
  @Column({ type: "date", nullable: true })
  due_date;
}
