import { Module } from "@nestjs/common";
import { PasswordService } from "./password/password.service";
import { BcryptProvider } from "./password/bcrypt-provider.service";
import { UsersModule } from "../users/users.module";

@Module({
  providers: [PasswordService, BcryptProvider],
  imports: [UsersModule],
})
export class AuthModule {}
