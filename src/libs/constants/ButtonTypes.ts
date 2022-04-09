export type ButtonType = 'primary' | 'normal' | 'warning' | 'danger'

export type ButtonValueType = {
  [key in ButtonType]: string
}

export const buttonColor: ButtonValueType = {
  primary: "#007bff",
  normal: "#ffffff",
  warning: "#ffc107",
  danger: "#dc3545",
}