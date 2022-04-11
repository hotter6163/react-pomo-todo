export const divmod = (dividend: number, divisor: number): { div: number, mod: number } => {
  return {
    div: Math.floor(dividend / divisor),
    mod: dividend % divisor
  }
}