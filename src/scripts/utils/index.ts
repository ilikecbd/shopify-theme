export const handleize = (source: string) => source.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '').replace(/^-/, '')

export class LocalStorageItem<T> {

  constructor (public key: string) {

  }

  public write = (value: T, expiration?: number): void => {
    window.localStorage.setItem(this.key, JSON.stringify({ value, expiration }))
  }

  public read = (): T | undefined => {
    const item = window.localStorage.getItem(this.key)

    if (!item) {
      return undefined
    }

    try {
      const itemJSON = JSON.parse(item)

      if (!!itemJSON.expiration && itemJSON.expiration > new Date().getTime()) {
        return undefined
      }

      return itemJSON.value
    } catch (e) {
      return undefined
    }
  }

  public delete = (): void => {
    window.localStorage.removeItem(this.key)
  }

}