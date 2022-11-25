<!--
 * @Description: 
 * @Author: ma.cq
 * @Date: 2022-11-25 12:28:09
 * @LastEditors: ma.cq
 * @LastEditTime: 2022-11-25 19:53:37
-->
<script setup lang="ts">
withDefaults(
  defineProps<{
    fp: string
    arr: number[]
  }>(),
  {
    arr: () => [1, 2, 3],
  }
)

const emit = defineEmits(['on-pp'])

const fn = () => {
  emit('on-pp', '123')
}

defineExpose({
  nn: 'ccczzz',
  f: (): void => {
    console.log('this is a function')
  },
})
</script>

<template>
  <div class="send">
    sendParams----------
    <div>father params: fp:{{ fp }}</div>
    <div>father params: arr:{{ arr }}</div>
    <button @click="fn">chlid btn</button>
  </div>
</template>

<style lang="less" scoped></style>
