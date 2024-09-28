import { Injectable } from "@nestjs/common";
import { BcryptProvider } from "./bcrypt-provider.service";

@Injectable()
export class PasswordService {
  constructor(private readonly bcryptProvider: BcryptProvider) {}
  async hashPassword(password: string) {
    return await this.bcryptProvider.hash(password);
  }
  async comparePassword(data: string | Buffer, encrypt: string) {
    return await this.bcryptProvider.compare(data, encrypt);
  }
}
