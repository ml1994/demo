/*
 * @Description:
 * @Author: ma.cq
 * @Date: 2022-11-23 19:42:29
 * @LastEditors: ma.cq
 * @LastEditTime: 2022-11-23 20:07:32
 */

import { createVNode, render } from 'vue'
import LoadingBar from '@/components/LoadingBar.vue'

const barVNode = createVNode(LoadingBar)
render(barVNode, document.body)

const startLoadingBar = barVNode.component?.exposed?.startLoading
const endLoadingBar = barVNode.component?.exposed?.endLoading

export { startLoadingBar, endLoadingBar }
