import { User } from "../../users/entity/user-entity";

export class BaseTodoDto {
  readonly title: string;
  readonly description: string;
  readonly user: User;
}
