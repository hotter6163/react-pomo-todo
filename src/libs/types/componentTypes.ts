import { ReactNode, ChangeEvent } from 'react'

import { JustifyContentType, AlineType, TextAlignType } from 'libs/types/cssValueTypes'
import { ColorType, SizeType } from 'libs/types/commonTypes'
import { ButtonType } from 'libs/constants/buttonValues'

export type StyledPProps = {
  color?: ColorType
  fontSize?: SizeType
  textAlign?: TextAlignType
}

export type StyledDivProps = {
  width?: string
  height?: string
  backgroundColor?: ColorType
  textAlign?: TextAlignType
}

export type StyledButtonProps = {
  size: SizeType
  color: ButtonType
}

export type TextProps = {
  fontSize: SizeType
  children: string
  textAlign?: TextAlignType
}

export type FlexContainerProps = {
  children: ReactNode
  justifyContent?: JustifyContentType
}

export type FlexItemProps = Omit<StyledDivProps, 'height' | 'textAlign'> & {
  order?: number
  alignSelf?: AlineType
  children: ReactNode
}

export type SelectBoxProps = {
  handleValue: any
  handleMethod: (e: ChangeEvent<HTMLSelectElement>) => void
  selectItems: { id: string, value: string}[]
  width?: string
}

export type TimerProps = {
  minite: number
}
