// import { Request, Response } from 'express';
import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Body,
  Param,
  Req,
  Res
} from '@nestjs/common';

import { Task } from './interfaces/Task';

import { CreateTaskDto } from './dto/create-task.dto';

import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Delete(':id')
  deleteTask(
    @Param('id') id: string
  ): Promise<string | Record<string, unknown>> {
    return this.tasksService.deleteTask(id);
  }

  @Get()
  /*getTask(@Req() req, @Res() res) {
    return res.send('Hello, world!');
  }*/
  getTasks(): Promise<Task[] | { message: string }> {
    return this.tasksService.getTasks();
  }

  @Get(':id')
  getTask(@Param('id') id: string): Promise<Task | { message: string }> {
    return this.tasksService.getTask(id);
  }

  @Post()
  createTask(@Body() task: CreateTaskDto): Promise<Task> {
    return this.tasksService.createTask(task);
  }

  @Put(':id')
  updateTask(@Body() task: CreateTaskDto, @Param('id') id): string {
    console.log(task);
    return `Updating task ${id}...`;
  }
}
