<!--
 * @Description: 
 * @Author: ma.cq
 * @Date: 2022-11-28 12:20:03
 * @LastEditors: ma.cq
 * @LastEditTime: 2022-11-28 19:48:03
-->
<script setup lang="ts">
import { getCurrentInstance, inject, type Ref } from 'vue'
import Bus from '@/utils/Bus'

const color = inject<Ref<string>>('color')

// inject到的值可以被修改，会同步到上级组件，如果不想被子组件修改，可以在provide时增减readonly
// color!.value = 'blue'
const instance = getCurrentInstance()
const changeChild2 = () => {
  Bus.emit('change', 'bus')
}
const usemitt = () => {
  instance?.proxy?.$bus.emit('cq', 'mitt')
}
</script>
<template>
  <div class="pchild">
    chlid
    <div class="box"></div>
    <button @click="changeChild2">changeChild2</button>
    <button @click="usemitt">usemittchange</button>
  </div>
</template>
<style scoped lang="less">
.box {
  width: 200px;
  height: 200px;
  background-color: v-bind(color);
}
</style>
