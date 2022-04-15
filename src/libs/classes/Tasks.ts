import { TaskType } from 'libs/types/todoListTypes'

export class Tasks {
  tasks: TaskType[]
  
  constructor() {
    this.tasks = []
  }
}