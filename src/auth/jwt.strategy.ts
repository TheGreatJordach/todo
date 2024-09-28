import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Injectable } from "@nestjs/common";
import { jwtConstants } from "./jwt.constant";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: "test-secret-key", // Temporary fix for debugging//TODO fixe variable later this is for debug
      secretOrPrivateKey: "test-secret-key",
    });
  }

  async validate(payload: any) {
    return { userID: payload.sub, email: payload.email };
  }
}
