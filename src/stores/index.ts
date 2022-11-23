import { defineStore } from 'pinia'
import { Names } from './storeName'
export const useTestStore = defineStore(Names.TEST, {
  state: () => ({
    num: 1,
    name: 'cq',
  }),
})
