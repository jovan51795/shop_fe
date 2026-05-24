<script setup lang="ts">
import {
  Cog6ToothIcon,
  CircleStackIcon,
  WrenchScrewdriverIcon,
  SignalIcon,
  SparklesIcon,
  TruckIcon,
} from '@heroicons/vue/20/solid'

const services = [
  {
    title: 'maintainace',
    description: 'General PMS, Oil Change, Tune up and more.',
    icon: Cog6ToothIcon,
  },
  {
    title: 'intallation',
    description: 'Professional installation for your parts and accessories.',
    icon: WrenchScrewdriverIcon,
  },
  {
    title: 'diagnostics',
    description: 'scanner diagnostics and troubleshooting',
    icon: SignalIcon,
  },
  {
    title: 'tire services',
    description: 'tire change, balancing, and tire alignment',
    icon: CircleStackIcon,
  },
  {
    title: 'custom build',
    description: 'build your dream bike with our expert mechanics',
    icon: SparklesIcon,
  },
  {
    title: 'pick-up & delivery',
    description: 'we pick up your motorcycle and we deliver it back',
    icon: TruckIcon,
  },
  {
    title: 'engine overhaul',
    description: 'complete engine rebuilding and performance restoration',
    icon: WrenchScrewdriverIcon,
  },
  {
    title: 'painting & body works',
    description: 'custom paint jobs, scratch repair, and body restoration',
    icon: SparklesIcon,
  },
]
</script>

<template>
  <div class="container mx-auto border-b-3 pb-5 pt-1 mt-5 border-[#1F2937]">
    <div class="flex justify-between mt-5 mb-2 mx-8 text-white">
      <h2 class="uppercase font-extrabold">Our Services</h2>
      <div class="text-[#EF4444]">
        <RouterLink to="/home">View All</RouterLink>
      </div>
    </div>
    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 xl:grid-cols-8 justify-items-center justify-center px-5"
    >
      <div
        class="w-full max-w-40 max-h-50 bg-[#1F2937] p-2 rounded-lg shadow-xs m-1 flex justify-between flex-col"
        v-for="(service, index) in services"
        :key="index"
      >
        <div class="m-auto">
          <component :is="service.icon" class="w-20 h-20" />
        </div>
        <div class="flex mt-5 flex-col text-white items-center justify-center text-xs text-center">
          <span
            class="text-heading uppercase font-extrabold mb-2 max-h-10 max-w-30 overflow-hidden text-ellipsis whitespace-nowrap"
            >{{ service.title }}</span
          >
          <span
            class="text-white max-h-10 capitalize text-[10px] overflow-hidden text-ellipsis max-w-30"
            >{{ service.description }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
