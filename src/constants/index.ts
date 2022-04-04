export const color = {
  deepSkyBlue: '#00bfff',
  darkGray: "#a9a9a9",
  black: "#000000",
}

export const fontSize = {
  s: '1rem',
  m: '2rem',
  l: '2.5rem',
  xl: '3rem',
} as const
export type FontSizeType = keyof typeof fontSize