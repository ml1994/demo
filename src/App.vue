<!--
 * @Description: 
 * @Author: ma.cq
 * @Date: 2022-11-21 15:21:46
 * @LastEditors: ma.cq
 * @LastEditTime: 2022-11-27 17:04:22
-->
<script setup lang="ts">
import { RouterView } from 'vue-router'
import { shallowRef, onMounted, ref } from 'vue'
import SendParams from '@/components/SendParams.vue'
import AAVue from '@/components/comps/AA.vue'
import BBVue from '@/components/comps/BB.vue'
import CCVue from '@/components/comps/CC.vue'

// 父子传参 start
const name: string = 'father cq'
const list: number[] = [34, 56]

const getChild = (str: string) => {
  console.log(str)
}
const sp = ref<InstanceType<typeof SendParams>>()
onMounted(() => {
  sp.value?.f()
  console.log(sp.value?.nn)
})
// 父子传参 end

// 动态组件 start
const comId = shallowRef(AAVue)
const active = ref(0)
const data = [
  {
    name: 'a',
    comp: AAVue,
  },
  {
    name: 'b',
    comp: BBVue,
  },
  {
    name: 'c',
    comp: CCVue,
  },
]

const change = (index: number) => {
  active.value = index
  comId.value = data[index].comp
}
// 动态组件 end
</script>

<template>
  <RouterLink to="/trans">trans</RouterLink>
  <RouterView />
  <span>--------------------------------------------------------</span>
  <SendParams ref="sp" :fp="name" :arr="list" @on-pp="getChild" />

  <div class="tabs">
    <div
      v-for="(item, index) in data"
      :key="item.name"
      :class="[active === index ? 'active' : '']"
      @click="change(index)"
    >
      {{ item.name }}
    </div>
  </div>

  <component :is="comId"></component>
</template>

<style scoped lang="less">
.tabs {
  display: flex;
  justify-content: center;
  > div {
    width: 100px;
    padding: 5px;
    border: 1px solid #ccc;
    text-align: center;
    margin: 0 10px;
    cursor: pointer;
  }
  > div.active {
    background-color: skyblue;
    color: white;
  }
}
</style>
