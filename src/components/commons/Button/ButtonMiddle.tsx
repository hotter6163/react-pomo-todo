import React, { VFC } from 'react'
import styled, { css } from 'styled-components'

import { ButtonProps } from 'libs/types/componentTypes'
import { color, fontSize } from 'libs/constants/index'

export const ButtonMiddle: VFC<ButtonProps> = ({ color, children, onClick, block=false }) => {
  return (
    <Wrapper color={color} block={block} onClick={onClick}>
      {children}
    </Wrapper>
  )
} 

const Wrapper = styled.button<Omit<ButtonProps, 'children' | 'onClick'>>`
  font-size: ${fontSize.m};
  width: 15rem;
  height: 2.5rem;
  border-radius: 1.25rem;
  margin: 0.5rem;
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