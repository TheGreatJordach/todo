import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: "postgres",
        host: configService.getOrThrow<string>("DATASOURCE_HOST"),
        port: configService.getOrThrow<number>("DATASOURCE_PORT"),
        database: configService.getOrThrow<string>("DATASOURCE_DATABASE"),
        username: configService.getOrThrow<string>("DATASOURCE_USERNAME"),
        password: configService.getOrThrow<string>("DATASOURCE_PASSWORD"),
        entities: [],
        synchronize: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
