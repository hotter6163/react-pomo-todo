import { ReactNode } from 'react'

import { FontSizeType } from 'constants/index'
import { JustifyContentValue, AlineValue } from 'types/CssValueTypes'


export type TextProps = {
  fontSize: FontSizeType,
  children: string,
}

export type FlexContainerProps = {
  children: ReactNode,
  justifyContent?: JustifyContentValue,
}

export type BasicBoxProps = {
  children: ReactNode,
  width: number,
}

export type FlexItemProps = BasicBoxProps & {
  order?: number,
  alignSelf?: AlineValue,
}