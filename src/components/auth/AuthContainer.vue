<script setup lang="ts">
import logo from '@/assets/logos/logo.png'
</script>

<template>
  <div
    class="container m-auto pt-10 md:pt-2 bg-[url('../assets/auth/auth_bg_sm.png')] md:bg-[url('../assets/auth/auth_bg_md.png')] lg:bg-[url('../assets/auth/auth_bg.png')] bg-cover bg-center h-screen"
  >
    <div>
      <div class="grid grid-cols-1 justify-items-center align-items-center">
        <img :src="logo" class="max-w-40 md:max-w-60" h-auto />
      </div>
      <div class="flex justify-center flex-col items-center h-full">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
