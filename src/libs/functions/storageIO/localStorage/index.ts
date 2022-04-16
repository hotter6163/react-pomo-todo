const storage: Storage = localStorage

export const saveStorage = (key: string, value: any): void => {
  storage.setItem(key, JSON.stringify(value))
}

export const getStorage = (key: string): string  => {
  const jsonString = storage.getItem(key)
  if (!jsonString) return ''
  return jsonString
}

export const removeStorage = (key: string): void => {
  storage.removeItem(key)
}