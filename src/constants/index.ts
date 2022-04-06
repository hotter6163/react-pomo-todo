export const color = {
  lightBlue: '#00bfff',
  gray: "#696969",
  black: "#000000",
} as const
export type ColorType = keyof typeof color

export const fontSize = {
  s: '1rem',
  m: '1.5rem',
  l: '2rem',
  xl: '2.5rem',
} as const
export type FontSizeType = keyof typeof fontSize

export const bodySideMargin = 10