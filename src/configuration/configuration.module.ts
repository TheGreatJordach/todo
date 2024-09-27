import { Module } from "@nestjs/common";
import { CacheModule } from "@nestjs/cache-manager";
import { ConfigModule } from "@nestjs/config";
import * as process from "node:process";

@Module({
  imports: [
    CacheModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async () => {
        const ttl: number = parseInt(process.env.CACHE_NUMBER_TLL) || 60 * 5;
        const max: number = parseInt(process.env.CACHE_MAX) || 100;

        if (max <= 0) {
          throw new Error("Maximum number must be positive");
        }
        if (ttl <= 0) {
          throw new Error("ttl number must be positive");
        }

        console.log(`Max: ${max} and ttl ${ttl}`);

        return {
          isGlobal: true,
          ttl,
          max,
        };
      },
    }),
    ConfigModule.forRoot({ isGlobal: true, cache: true, envFilePath: ".env" }),
  ],
})
export class ConfigurationModule {}
