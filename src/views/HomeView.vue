<!--
 * @Description: 
 * @Author: ma.cq
 * @Date: 2022-11-21 15:21:46
 * @LastEditors: ma.cq
 * @LastEditTime: 2022-11-22 10:23:07
-->
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useTestStore } from '../stores'
const Test = useTestStore()

// pinia解构没有响应式，需要使用storeToRefs
const { name } = storeToRefs(Test)
// 解构出的name需要用name.value赋值
const change = () => {
  name.value = '改变的cq'
}
</script>

<template>
  <div class="home">
    <h1>This is an home page</h1>
    <span>{{ Test.name }}</span>
    <span>{{ name }}</span>
    <button @click="change">change</button>
  </div>
</template>
