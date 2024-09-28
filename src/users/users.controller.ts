import { Controller, Get, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { UsersService } from "./users.service";

//@UseGuards(JwtAuthGuard)
@Controller("")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  allUser() {
    return "this service returns all users";
  }
}
