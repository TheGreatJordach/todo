import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { UsersService } from "../users/users.service";
import { PasswordService } from "./password/password.service";
import { User } from "../users/entity/user-entity";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly passwordService: PasswordService,
    private readonly jwtService: JwtService
  ) {}
  async registration(createUserDto: CreateUserDto) {
    // check if the email is already used
    const emailIsUsed: boolean = await this.usersService.checkIfExit(
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
    const newUser = await this.usersService.create({
      ...createUserDto,
      password: hashedPassword,
    });

    return await this.generateToken(newUser);
  }

  async validateUser(email: string, password: string): Promise<User> {
    const storedUser: User = await this.usersService.findByEmail(email);
    if (!storedUser) return null;
    const isValidEmail: boolean = await this.passwordService.comparePassword(
      password,
      storedUser.password
    );
    if (!isValidEmail) return null;
    return storedUser;
  }

  private async generateToken(user: User): Promise<{ token: string }> {
    const payload = { email: user.email, sub: user.id, expires: "1h" };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
