<!--
 * @Description: 
 * @Author: ma.cq
 * @Date: 2022-11-28 12:19:56
 * @LastEditors: ma.cq
 * @LastEditTime: 2022-11-28 19:48:08
-->
<script setup lang="ts">
import { inject, type Ref } from 'vue'
import PChild from './PChild.vue'
import PChild2 from './pChild2.vue'
const color = inject<Ref<string>>('color')
</script>
<template>
  <div class="pfather">
    father
    <div class="box"></div>
    <PChild />
    <PChild2 />
  </div>
</template>
<style scoped lang="less">
.box {
  width: 200px;
  height: 200px;
  background-color: v-bind(color);
}
</style>
