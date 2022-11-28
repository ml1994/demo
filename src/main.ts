/*
 * @Description:
 * @Author: ma.cq
 * @Date: 2022-11-21 15:21:46
 * @LastEditors: ma.cq
 * @LastEditTime: 2022-11-28 13:46:16
 */
import Mitt from 'mitt'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { perPlugin } from './plugins/persistence'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const store = createPinia()
store.use(
  perPlugin({
    key: 'pinia',
  })
)

const mit = Mitt()
app.config.globalProperties.$bus = mit
declare module 'vue' {
  interface ComponentCustomProperties {
    $bus: typeof mit
  }
}

app.use(store)
app.use(router)

app.mount('#app')
