import React, { VFC, createContext, useState, ReactNode } from 'react'

import { Tasks } from 'libs/classes/Tasks'
import { TasksContextType } from 'libs/types/todoListTypes'

export const TasksContext = createContext<TasksContextType>({} as TasksContextType)

export const TasksProvider: VFC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Tasks>(new Tasks())
  
  return (
    <TasksContext.Provider value={{ tasks: tasks, setTasks: setTasks }}>
      {children}
    </TasksContext.Provider>
  ) 
} 