import { Todo } from "../../tasks/entity/todo-entity";
import { IsEmail, IsNotEmpty, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

export class BaseUserDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;
  @Type(() => Todo)
  @ValidateNested({ each: true })
  readonly todos: Todo[];
}
