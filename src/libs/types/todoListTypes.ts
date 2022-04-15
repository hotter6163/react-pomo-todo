import { SetValueType } from 'libs/types/commonTypes'
import { Tasks } from 'libs/classes/Tasks'

export type TaskType = {
  id: string
  name: string
  runTime: number
  parent: string | undefined
}

export type TasksContextType = {
  tasks: Tasks
  setTasks: SetValueType<Tasks>
}