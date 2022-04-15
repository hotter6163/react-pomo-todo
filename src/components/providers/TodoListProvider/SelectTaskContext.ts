import { createContext } from 'react'

import { SelectTaskType } from 'libs/types/todoListTypes'

export const SelectTaskContext = createContext<SelectTaskType>(undefined)