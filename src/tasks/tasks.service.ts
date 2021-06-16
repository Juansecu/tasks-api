import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Task } from './interfaces/Task';

import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  constructor(@InjectModel('Task') private taskModel: Model<Task>) {}

  async createTask(task: CreateTaskDto): Promise<Task> {
    return await new this.taskModel(task).save();
  }

  async deleteTask(id: string): Promise<string | Record<string, unknown>> {
    return await this.taskModel
      .findByIdAndRemove(id, { useFindAndModify: false })
      .then(
        task =>
          `Task ${task.title} with ID ${task._id} was removed successfuly!`
      )
      .catch(error => {
        console.log(error);

        let errorKeysCounter = 0;

        for (const key in error) errorKeysCounter++;

        if (!errorKeysCounter)
          return { message: `Task with ID ${id} was not found.` };

        return {
          message: `There was an error trying to remove the task with ID ${id}.`,
          error
        };
      });
  }

  async getTasks(): Promise<Task[] | { message: string }> {
    const tasks = await this.taskModel.find();

    if (tasks.length) return tasks;

    return {
      message: 'No tasks were found.'
    };
  }

  async getTask(id: string): Promise<Task | { message: string }> {
    return await this.taskModel.findById(id).catch(error => {
      if (error.path === '_id' && error.name === 'CastError')
        return { message: `No task with ID ${id} was found.` };
      else return error;
    });
  }
}
