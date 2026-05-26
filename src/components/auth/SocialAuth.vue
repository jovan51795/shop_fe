<script setup lang="ts">
import IconGoogle from '@/components/icons/IconGoogle.vue'
import IconFacebook from '@/components/icons/IconFacebook.vue'
</script>

<template>
  <div class="grid grid-cols-2 gap-2">
    <div class="w-full">
      <button
        class="w-full flex flex-row justify-center md:gap-4 gap-2 items-center bg-[#2A3441] hover:bg-[#364152] h-[48px] max-h-[48px] px-10 py-2 rounded-md"
      >
        <IconGoogle class="w-5 hidden md:block" />
        <span>Google</span>
      </button>
    </div>
    <div class="w-full">
      <button
        class="w-full flex flex-row justify-center gap-4 items-center bg-[#2A3441] hover:bg-[#364152] h-[48px] max-h-[48px] px-10 py-2 rounded-md"
      >
        <IconFacebook class="w-7 hidden md:block" />
        <span>Facebook</span>
      </button>
    </div>
  </div>
</template>
