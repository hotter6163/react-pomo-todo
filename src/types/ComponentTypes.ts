import { ReactNode } from 'react'

import { JustifyContentType, AlineType, TextAlignType } from 'types/CssValueTypes'
import { ColorType, FontSizeType } from 'constants/index'

export type StyledPProps = {
  color?: ColorType
  fontSize?: FontSizeType
  textAlign?: TextAlignType
}

export type StyledDivProps = {
  width?: string
  height?: string
  backgroundColor?: ColorType
  textAlign?: TextAlignType
}


export type TextProps = {
  fontSize: FontSizeType
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