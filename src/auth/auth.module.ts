import { Module } from "@nestjs/common";
import { PasswordService } from "./password/password.service";
import { BcryptProvider } from "./password/bcrypt-provider.service";
import { UsersModule } from "../users/users.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { JwtStrategy } from "./jwt.strategy";
import { LocalAuthGuard } from "./local-auth.guard";
import { jwtConstants } from "./jwt.constant";

@Module({
  providers: [
    PasswordService,
    BcryptProvider,
    AuthService,
    //JwtService,
    JwtStrategy,
    LocalAuthGuard,
  ],
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: (() => {
        console.log(`The secret is ${jwtConstants.secret} `);
        console.log(typeof jwtConstants.secret);
        return jwtConstants.secret;
      })(), //TODO
      signOptions: { expiresIn: "60m" },
      global: true,
    }),
  ],
  controllers: [AuthController],
})
export class AuthModule {}
