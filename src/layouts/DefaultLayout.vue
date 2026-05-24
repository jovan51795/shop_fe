<script setup lang="ts">
import BottomFooter from '@/components/BottomFooter.vue'
import Header from '@/components/Header.vue'
import TopFooter from '@/components/TopFooter.vue'

import { RouterView } from 'vue-router'
</script>

<template>
  <<Header />
  <RouterView />
  <main>
    <TopFooter />
    <BottomFooter />
  </main>
</template>
