import React from 'react'

export type BasicColorType = 'lightBlue' | 'gray' | 'black' | 'white'
export type NamedColorType = 'primary' | 'normal' | 'warning' | 'danger'
export type ColorType = BasicColorType | NamedColorType
export type ColorValueType = {
  [key in ColorType]: string
}

export type SizeType = 's' | 'm' | 'l' | 'xl'
export type SizeValueType = {
  [key in SizeType]: string
}

export type SetValueType<T> = React.Dispatch<React.SetStateAction<T>>