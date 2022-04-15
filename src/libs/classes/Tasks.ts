import { TaskType } from 'libs/types/todoListTypes'

import { SelectItem } from 'libs/types/commonTypes'
import { v4 as uuid } from 'uuid'

export class Tasks {
  tasks: TaskType[]
  
  constructor() {
    this.tasks = [
      {
        id: '1',
        name: 'hoge',
        runTime: 0,
        parent: undefined
      },
      {
        id: '2',
        name: 'hoge2',
        runTime: 0,
        parent: '1'
      },
      {
        id: '3',
        name: 'hoge3',
        runTime: 1.3 * 3600,
        parent: undefined
      },
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
  
  parents(): TaskType[] {
    return this.tasks.filter((task) => {
      return typeof task.parent === 'undefined'
    })
  }
  
  children(parentId: string): TaskType[] {
    return this.tasks.filter((task) => {
      return task.parent === parentId
    })
  }
}