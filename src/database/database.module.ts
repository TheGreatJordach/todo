import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../users/entity/user-entity";
import { Todo } from "../tasks/entity/todo-entity";

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
        entities: [User, Todo],
        synchronize: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
