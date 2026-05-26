<script setup lang="ts">
import { CheckBadgeIcon, ShieldCheckIcon, TruckIcon } from '@heroicons/vue/20/solid'
import IconHeadset from '@/components/icons/IconHeadset.vue'

const infos = [
  {
    title: '100% Authentic',
    description: 'we only sell original and high quality products',
    icon: CheckBadgeIcon,
  },
  {
    title: 'secure payment',
    description: 'multiple safe payment option available',
    icon: ShieldCheckIcon,
  },
  {
    title: 'nationwide shipping',
    description: 'we deliver to any part of the philippines',
    icon: TruckIcon,
  },
  {
    title: 'customer support',
    description: 'We are here to help! message us any time',
    icon: IconHeadset,
  },
]
</script>

<template>
  <div class="grid grid-cols-2 lg:grid-cols-4 justify-items-center align-items-center gap-2 p-10">
    <div
      v-for="(info, index) in infos"
      :key="index"
      class="flex flex-row text-white justify-start w-full"
    >
      <component :is="info.icon" class="max-w-[40px] text-[#EF4444]" />
      <div class="flex flex-col justify-center item-center pl-3">
        <h1 class="uppercase font-bold">{{ info.title }}</h1>
        <p class="capitalize">{{ info.description }}</p>
      </div>
    </div>
  </div>
</template>
