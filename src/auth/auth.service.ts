import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { UsersService } from "../users/users.service";
import { PasswordService } from "./password/password.service";

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly passwordService: PasswordService
  ) {}
  async registration(createUserDto: CreateUserDto) {
    // check if the email is already used
    const emailIsUsed: boolean = await this.usersService.checkIfExsit(
      createUserDto.email
    );

    if (emailIsUsed) {
      throw new HttpException("Email already exists", HttpStatus.UNAUTHORIZED);
    }

    //hash the password
    const hashedPassword: string = await this.passwordService.hashPassword(
      createUserDto.password
    );

    if (!hashedPassword) {
      throw new HttpException(
        "Un excepted error while trying to encrypt the user",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }

    //create new user
    return await this.usersService.create({
      ...createUserDto,
      password: hashedPassword,
    });
  }
}
