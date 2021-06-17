import { Task } from './../interfaces/Task';

export const tasksDto: Task[] = [
  {
    id: 1,
    title: 'Create the project',
    description: 'Task 1.',
    done: true
  },
  {
    id: 2,
    title: 'Connect to the database',
    description: 'Task 2.',
    done: true
  },
  {
    id: 3,
    title: 'Create the users api',
    description: 'Tak 3.',
    done: true
  },
  {
    id: 4,
    title: 'Test the users api',
    description: 'Task 4.',
    done: false
  },
  {
    id: 5,
    title: 'Deploy the users api',
    description: 'Task 5.',
    done: true
  }
];
