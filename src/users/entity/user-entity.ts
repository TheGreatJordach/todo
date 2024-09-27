import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Todo } from "../../tasks/entity/todo-entity";

@Entity("user")
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column({ unique: true })
  email: string;
  @Column()
  password: string;
  @ManyToOne(() => Todo, (todo) => todo.user, { onDelete: "CASCADE" })
  todos: Todo[];
}
