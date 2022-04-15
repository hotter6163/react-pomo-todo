import React, { VFC, createContext, useState, ReactNode } from 'react'

import { Tasks } from 'libs/classes/Tasks'
import { SetMethodsType, EditTaskType } from 'libs/types/todoListTypes'
import { EditTaskContext } from './EditTaskContext'
import { SelectTaskContext } from './SelectTaskContext'
import { TasksContext } from './TasksContext'

export const TodoListMethodsContext = createContext<SetMethodsType>({} as SetMethodsType)

export const TodoListProvider: VFC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Tasks>(new Tasks())
  const [editTask, setEditTask] = useState<EditTaskType>(undefined)
  const [selectTask, setSelectTask] = useState<string>('')
  
  const TodoListMethods: SetMethodsType = {
    setEditTask,
    setSelectTask,
    setTasks
  }
  
  return (
    <SelectTaskContext.Provider value={selectTask}>
      <TasksContext.Provider value={tasks}>
        <EditTaskContext.Provider value={editTask}>
          <TodoListMethodsContext.Provider value={TodoListMethods}>
            {children}
          </TodoListMethodsContext.Provider>
        </EditTaskContext.Provider>
      </TasksContext.Provider>
    </SelectTaskContext.Provider>
  ) 
} 