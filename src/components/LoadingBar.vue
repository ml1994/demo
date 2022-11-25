<!--
 * @Description: 
 * @Author: ma.cq
 * @Date: 2022-11-23 19:42:52
 * @LastEditors: ma.cq
 * @LastEditTime: 2022-11-24 16:32:27
-->
<template>
  <div class="wrap">
    <div ref="bar" class="bar"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const bar = ref<HTMLElement>()

let speed = ref<number>(1)

const startLoading = () => {
  const dom = bar.value as HTMLElement
  speed.value = 1
  const timer = window.requestAnimationFrame(function ani() {
    if (speed.value < 90) {
      speed.value += 1
      dom.style.width = speed.value + '%'
      window.requestAnimationFrame(ani)
    } else {
      window.cancelAnimationFrame(timer)
    }
  })
}
const endLoading = () => {
  const dom = bar.value as HTMLElement
  setTimeout(() => {
    window.requestAnimationFrame(() => {
      speed.value = 100
      dom.style.width = speed.value + '%'
    })
  }, 1000)
}

defineExpose({
  startLoading,
  endLoading,
})
</script>

<style scoped lang="less">
.wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;

  .bar {
    height: inherit;
    width: 0;
    background-color: aqua;
  }
}
</style>
