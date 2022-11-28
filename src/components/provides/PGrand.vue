<!--
 * @Description: 
 * @Author: ma.cq
 * @Date: 2022-11-28 12:19:49
 * @LastEditors: ma.cq
 * @LastEditTime: 2022-11-28 19:48:14
-->
<script setup lang="ts">
import { provide, readonly, ref } from 'vue'
import PFatherVue from './PFather.vue'
const color = ref<string>('red')
// inject到的值可以被修改，会同步到上级组件，如果不想被子组件修改，可以在provide时增减readonly
provide('color', readonly(color))
</script>
<template>
  <div class="pgrand">
    grand
    <div class="box"></div>
    <PFatherVue></PFatherVue>
  </div>
</template>
<style scoped lang="less">
.box {
  width: 200px;
  height: 200px;
  background-color: v-bind(color);
}
</style>
