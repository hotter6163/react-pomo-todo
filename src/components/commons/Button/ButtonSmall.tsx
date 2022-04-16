import React, { VFC } from 'react'
import styled, { css } from 'styled-components'

import { ButtonProps } from 'libs/types/componentTypes'
import { color, fontSize } from 'libs/constants/index'

export const ButtonSmall: VFC<ButtonProps> = ({ color, children, onClick, block=false, disabled=false }) => {
  return (
    <Wrapper color={color} block={block} onClick={onClick} disabled={disabled}>
      {children}
    </Wrapper>
  )
} 

const Wrapper = styled.button<Omit<ButtonProps, 'children' | 'onClick'>>`
  font-size: ${fontSize.s};
  width: 6rem;
  height: 2.5rem;
  border-radius: 1.25rem;
  margin: 0.3rem;
  ${props => 
   css`
    background-color: ${color[props.color]};
    border: 1px ${props.color === 'normal' ? color.black :color[props.color]} solid;
    ${props.color !== "normal" && css`color: ${color.white};`}
    ${props.block && css`
      display: block;
      margin-left: auto;
      margin-right: auto;
    `}
  `}
`