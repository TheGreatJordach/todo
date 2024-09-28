import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entity/user-entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const user: User = this.usersRepository.create(createUserDto);
      return await this.usersRepository.save(user);
    } catch (error) {
      if (error.code === "23505") {
        // PostgresSQL unique constraint violation code
        throw new HttpException(
          "Email you are using is already used",
          HttpStatus.CONFLICT
        );
      }
    }
  }
  async findByEmail(email: string): Promise<User> {
    try {
      const user: User = await this.usersRepository.findOne({
        where: { email: email },
      });
      if (!user) throw new HttpException("User not found", 404);
      return user;
    } catch (error) {
      throw new HttpException("User not found", 404);
    }
  }

  async checkIfExsit(email: string): Promise<boolean> {
    try {
      const result = await this.usersRepository.count({ where: { email } });
      return result > 0;
    } catch (error) {
      throw new InternalServerErrorException(
        "something happen when trying to contact de database",
        error.code
      );
    }
  }
}
