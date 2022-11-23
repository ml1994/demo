<!--
 * @Description: 
 * @Author: ma.cq
 * @Date: 2022-11-21 15:21:46
 * @LastEditors: ma.cq
 * @LastEditTime: 2022-11-22 13:55:51
-->
<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <span>{{ route.params.p }}</span>
  </div>
</template>

<style></style>
