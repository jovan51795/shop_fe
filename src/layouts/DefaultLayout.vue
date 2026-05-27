<script setup lang="ts">
import BottomFooter from '@/components/footer/BottomFooter.vue'
import Header from '@/components/Header.vue'

import { RouterView } from 'vue-router'
</script>

<template>
  <<Header />
  <RouterView />
  <main>
    <BottomFooter />
  </main>
</template>
