import { TaskType } from 'libs/types/todoListTypes'

import { SelectItem } from 'libs/types/commonTypes'
import { v4 as uuid } from 'uuid'

export class Tasks {
  tasks: TaskType[]
  
  constructor() {
    this.tasks = [
      {
        id: uuid(),
        name: 'hoge',
        runTime: 0,
        parent: undefined
      }
    ]
  }
  
  selectItems(): SelectItem[] {
    return this.tasks.map((task) => {
      return {
        id: task.id,
        value: task.id,
        title: task.name,
      }
    })
  }
}