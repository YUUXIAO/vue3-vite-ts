<template>
  <!-- <Suspense>
    <template #default>
      <router-view v-slot="{ Component, route }">
        <transition :name="route.meta.transition || 'fade'" mode="out-in">
          <keep-alive>
            <component :is="Component" :key="route.meta.usePathKey ? route.path : undefined" />
          </keep-alive>
        </transition>
      </router-view>
    </template>
    <template #fallback> Loading... </template>
  </Suspense> -->
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>

<style></style>
