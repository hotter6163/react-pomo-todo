export const divmod = (dividend: number, divisor: number): { div: number, mod: number } => {
  return {
    div: Math.floor(dividend / divisor),
    mod: dividend % divisor
  }
}

export const round = (value: number, digit: number): number => {
  return Math.round(value / Math.pow(10, digit)) * Math.pow(10, digit)
} 