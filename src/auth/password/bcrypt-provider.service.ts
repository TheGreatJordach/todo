import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { HashAlgoInterface } from "./hash-algo.interface";
import * as bcrypt from "bcrypt";

@Injectable()
export class BcryptProvider implements HashAlgoInterface {
  constructor() {}

  private readonly saltRound: number = parseInt(process.env.SALT_ROUNDS);

  async hash(data: string | Buffer): Promise<string> {
    try {
      console.log(this.saltRound);
      const salt = bcrypt.genSaltSync(this.saltRound);

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
