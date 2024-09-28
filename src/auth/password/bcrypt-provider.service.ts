import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { HashAlgoInterface } from "./hash-algo.interface";
import * as bcrypt from "bcrypt";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class BcryptProvider implements HashAlgoInterface {
  constructor(private readonly configService: ConfigService) {}

  private readonly saltRound = this.configService.get<number>("SALT_ROUNDS");

  async hash(data: string | Buffer): Promise<string> {
    try {
      const salt = await bcrypt.genSalt(this.saltRound);
      return await bcrypt.hash(data, salt);
    } catch (error) {
      throw new InternalServerErrorException(
        "Failed to generate hash algorithm"
      );
    }
  }
  async compare(data: string | Buffer, encrypted: string): Promise<boolean> {
    try {
      return await bcrypt.compare(data, encrypted);
    } catch (error) {
      throw new InternalServerErrorException("Failed to compare passwords");
    }
  }
}
