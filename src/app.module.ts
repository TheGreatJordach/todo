import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigurationModule } from "./configuration/configuration.module";
import { DatabaseModule } from "./database/database.module";
import { UsersModule } from "./users/users.module";
import { TodoModule } from "./tasks/todo.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [
    ConfigurationModule,
    DatabaseModule,
    UsersModule,
    TodoModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
