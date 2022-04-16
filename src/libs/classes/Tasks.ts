import { v4 as uuid } from 'uuid'

import { TaskType, ActionType } from 'libs/types/todoListTypes'
import { SelectItem } from 'libs/types/commonTypes'

export class Tasks {
  tasks: TaskType[]
  
  constructor() {
    this.tasks = [
      {
        id: '1',
        value: 'hoge',
        runTime: 0,
        parent: undefined
      },
      {
        id: '2',
        value: 'hoge2',
        runTime: 0,
        parent: '1'
      },
      {
        id: '3',
        value: 'hoge3',
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
        title: task.value,
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
  
  findIndex(id: string): number | undefined {
    return this.tasks.findIndex((task) => {
      return task.id === id
    })
  }
  
  findTask(id: string): TaskType | undefined {
    return this.tasks.find((task) => {
      return task.id === id
    })
  }
  
  editTasks(action: ActionType, target: string, value: string): void {
    switch (action) {
      case 'add':
        this.addTask(target, value)
        break
      case 'edit':
        this.editTask(target, value)
        break
      default:
        throw new Error('指定したactionが不適切です。')
    }
  }
  
  addTask(target: string, value: string): void {
    if (!!this.findTask(target)?.parent) return
    
    const newTask: TaskType = {
      id: uuid(),
      value,
      runTime: 0,
      parent: target === 'master' ? undefined : target
    }
    this.tasks.push(newTask)
  }
  
  editTask(target: string, value:string): void {
    const index = this.findIndex(target)
    if (typeof index !== 'number') {
      throw new Error(`taskId:${target} は正しくありません`)
    }
    this.tasks[index].value = value
  }
  
  deleteTask(id: string): void {
    const index = this.findIndex(id)
    if (typeof index !== 'number') {
      throw new Error(`taskId:${id} は正しくありません`)
    }
    this.tasks.splice(index, 1)
    this.children(id).forEach((task) => this.deleteTask(task.id))
  }
}

