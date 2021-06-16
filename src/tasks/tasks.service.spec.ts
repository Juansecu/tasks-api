import { Test, TestingModule } from '@nestjs/testing';

import { Task } from './interfaces/Task';

import { TasksService } from './tasks.service';

describe('TasksService', () => {
  let service: TasksService;
  let tasks: Task[] | object;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TasksService]
    }).compile();

    service = module.get<TasksService>(TasksService);
  });

  describe('getTasks', () => {
    it('should return an array of tasks', async () => {
      service.getTasks().then(gottenTasks => (tasks = gottenTasks));
    });

    it('should be defined', () => {
      expect(tasks).toBeDefined();
    });
  });
});
