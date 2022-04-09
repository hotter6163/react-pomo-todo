export type SizeType = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' 

export type SizeValuetype = {
  [key in SizeType]: string
}

export const fontSize: SizeValuetype = {
  xs: '0.8rem',
  s: '1rem',
  m: '1.5rem',
  l: '2rem',
  xl: '2.5rem',
  xxl: '3.5rem',
} as const
