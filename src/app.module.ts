import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';

import { AppService } from './app.service';

import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/tasks-database'),
    TasksModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
