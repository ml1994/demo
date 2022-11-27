<!--
 * @Description: 
 * @Author: ma.cq
 * @Date: 2022-11-27 14:02:48
 * @LastEditors: ma.cq
 * @LastEditTime: 2022-11-27 21:30:08
-->
<script setup lang="ts">
import { ref } from 'vue'
import gsap from 'gsap'
import 'animate.css'

const flag1 = ref<boolean>(false)
const flag2 = ref<boolean>(false)
const flag3 = ref<boolean>(false)
const flag4 = ref<boolean>(false)

const enter = (el: Element, done: gsap.Callback) => {
  gsap.from(el, {
    width: 0,
    height: 0,
    onComplete: done,
  })
}
const leave = (el: Element, done: gsap.Callback) => {
  gsap.to(el, {
    width: 0,
    height: 0,
    onComplete: done,
  })
}
</script>
<template>
  <section>
    <h3>原始transition</h3>
    <button @click="flag1 = !flag1">toggle</button>
    <Transition name="normal">
      <div class="box" v-if="flag1"></div>
    </Transition>
  </section>
  <section>
    <h3>class属性transition</h3>
    <button @click="flag2 = !flag2">toggle</button>
    <Transition
      enter-from-class="normal-enter-from"
      enter-active-class="normal-enter-active"
      leave-to-class="normal-leave-to"
      leave-active-class="normal-leave-active"
    >
      <div class="box" v-if="flag2"></div>
    </Transition>
  </section>
  <section>
    <h3>class属性+animate</h3>
    <button @click="flag3 = !flag3">toggle</button>
    <Transition
      enter-active-class="animate__animated animate__zoomIn"
      leave-active-class="animate__animated animate__zoomOut"
    >
      <div class="box" v-if="flag3"></div>
    </Transition>
  </section>
  <section>
    <h3>trans周期+gsap</h3>
    <button @click="flag4 = !flag4">toggle</button>
    <Transition @enter="enter" @leave="leave">
      <div class="box" v-if="flag4"></div>
    </Transition>
  </section>
</template>
<style scoped lang="less">
.box {
  width: 200px;
  height: 200px;
  background-color: aqua;
}
.normal-enter-from,
.normal-leave-to {
  width: 0;
  height: 0;
}
.normal-enter-active,
.normal-leave-active {
  transition: all 1s ease;
}
</style>
