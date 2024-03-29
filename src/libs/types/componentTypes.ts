import { ReactNode, ChangeEvent } from 'react'

import { JustifyContentType, AlineType, TextAlignType } from 'libs/types/cssValueTypes'
import { NamedColorType, BasicColorType, SizeType } from 'libs/types/commonTypes'
import { SelectItem } from './commonTypes'

export type StyledPProps = {
  color?: BasicColorType
  fontSize?: SizeType
  textAlign?: TextAlignType
  inline?: boolean
}

export type StyledInputProps = {
  fontSize?: SizeType
  width?: string
}

export type StyledDivProps = {
  width?: string
  height?: string
  backgroundColor?: BasicColorType
  textAlign?: TextAlignType
}

export type ButtonProps = {
  children: ReactNode
  color: NamedColorType
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | undefined) => void
  block?: boolean
  disabled?: boolean
}

export type TextProps = {
  fontSize: SizeType
  children: ReactNode
  textAlign?: TextAlignType
  inline?: boolean
}

export type FlexContainerProps = {
  children: ReactNode
  justifyContent?: JustifyContentType
}

export type FlexItemProps = Omit<StyledDivProps, 'height'> & {
  order?: number
  alignSelf?: AlineType
  children: ReactNode
}

export type SelectBoxProps = {
  handleValue: any
  handleMethod: (e: ChangeEvent<HTMLSelectElement>) => void
  selectItems: SelectItem[]
  width?: string
}
