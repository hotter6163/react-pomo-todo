import { v4 as uuid, validate } from 'uuid'

import { TaskType, ActionType } from 'libs/types/todoListTypes'
import { SelectItem } from 'libs/types/commonTypes'
import { getStorage, removeStorage } from 'libs/functions/storageIO/localStorage'
import { tasksStorageKey } from 'libs/constants/constant'

export class Tasks {
  tasks: TaskType[]
  
  constructor() {
    this.tasks = this.getStoredTasks()
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
  
  updateTasks(action: ActionType, target: string, value: string): void {
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
  
  haveTask(): boolean {
    return this.tasks.length !== 0
  }
  
  getStoredTasks(): TaskType[] {
    const jsonString = getStorage(tasksStorageKey)
    try {
      const storedTasks = JSON.parse(jsonString)
      assertIsTaskTypes(storedTasks)
      return storedTasks
    } catch {
      removeStorage(tasksStorageKey)
      return []
    }
  }
  
  addRunTime(id: string, sec: number): void {
    const index = this.findIndex(id)
    console.log(index)
    if (typeof index === 'undefined') return
    this.tasks[index].runTime += sec
  }
}

function assertIsTaskTypes(value: any): asserts value is TaskType[] {
  if (!Array.isArray(value) || !value.every((item) => {
    if (!item) return false
    if (!validate(item.id)) return false
    if (!item.value) return false
    if (typeof item.runTime !== 'number') return false
    if (!!item.parent && !validate(item.parent)) return false

    return true
  })) {
    throw new Error('引数「value」は TaskType[] 型と一致しません。')
  }
}
