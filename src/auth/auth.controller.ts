import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { AuthService } from "./auth.service";

@Controller("")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post(":register")
  register(@Body() createUserDto: CreateUserDto) {
    return this.authService.registration(createUserDto);
  }
}
