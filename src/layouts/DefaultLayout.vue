<script setup lang="ts">
import Header from '@/components/Header.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <Header />
  <RouterView />
  <div>
    <h1>Footer</h1>
  </div>
</template>
