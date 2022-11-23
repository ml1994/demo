// 持久化插件
import type { PiniaPluginContext } from 'pinia'
import { toRaw } from 'vue'

type option = {
  key?: string
}

const getLocalStorage = (key: string) => {
  return localStorage.getItem(key)
    ? JSON.parse(<string>localStorage.getItem(key))
    : {}
}

const setLocalStorage = (key: string, val: any) => {
  localStorage.setItem(key, JSON.stringify(val))
}

const __piniaKey__ = 'cq'

export const perPlugin = (option: option) => {
  return (context: PiniaPluginContext) => {
    const { store } = context
    const storageKey = `${option?.key ?? __piniaKey__}--${store.$id}`
    const data = getLocalStorage(storageKey)
    store.$subscribe(() => {
      setLocalStorage(storageKey, toRaw(store.$state))
    })
    return {
      ...data,
    }
  }
}
