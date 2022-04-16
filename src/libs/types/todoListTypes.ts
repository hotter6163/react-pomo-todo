import { SetValueType } from 'libs/types/commonTypes'
import { Tasks } from 'libs/classes/Tasks'

export type TaskType = {
  id: string
  value: string
  runTime: number
  parent: string | undefined
}

export type EditTaskType = {
  action: ActionType
  target: string
} | undefined

export type SetMethodsType = {
  setEditTask: SetValueType<EditTaskType>
  setSelectTask: SetValueType<string>
  setTasks: SetValueType<Tasks>
}

export const actionText = {
  add: 'Add',
  edit: 'Edit'
} as const
export type ActionType = keyof typeof actionText

