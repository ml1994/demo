<!--
 * @Description: 
 * @Author: ma.cq
 * @Date: 2022-11-28 13:16:53
 * @LastEditors: ma.cq
 * @LastEditTime: 2022-11-28 13:55:25
-->
<script setup lang="ts">
import Bus from '@/utils/Bus'
import { getCurrentInstance, ref } from 'vue'
Bus.on('change', (str: string) => {
  console.log(str)
  bool.value = !bool.value
})
//
const bool = ref<boolean>(false)
const strMitt = ref<string>('init')
const instance = getCurrentInstance()
instance?.proxy?.$bus.on('cq', (str) => {
  strMitt.value = str as string
})
</script>
<template>
  <div class="pchild2">{{ bool }}</div>
  <span>{{ strMitt }}</span>
</template>
<style scoped lang="less">
/**/
</style>
