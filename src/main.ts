/*
 * @Description:
 * @Author: ma.cq
 * @Date: 2022-11-21 15:21:46
 * @LastEditors: ma.cq
 * @LastEditTime: 2022-11-25 13:31:02
 */
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

app.use(store)
app.use(router)

app.mount('#app')
