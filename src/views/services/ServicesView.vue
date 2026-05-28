<script setup lang="ts">
import {
  WrenchScrewdriverIcon,
  CalendarIcon,
  CogIcon,
  CircleStackIcon,
  SparklesIcon,
  BoltIcon,
  RocketLaunchIcon,
  MinusCircleIcon,
  AdjustmentsHorizontalIcon,
} from '@heroicons/vue/20/solid'
import { RouterLink } from 'vue-router'
import ServicesBanner from '@/components/services/ServicesBanner.vue'
import service_image_1 from '@/assets/services/service_image_1.png'
import service_image_2 from '@/assets/services/service_image_2.png'
import service_image_3 from '@/assets/services/service_image_3.png'
import service_image_4 from '@/assets/services/service_image_4.png'
import service_image_5 from '@/assets/services/service_image_5.png'
import service_image_6 from '@/assets/services/service_image_6.png'
import service_image_7 from '@/assets/services/service_image_7.png'
import service_image_8 from '@/assets/services/service_image_8.png'

const services = [
  {
    title: 'general service',
    desc: 'complete bike check-up, oil change, and adjustments for smooth performance.',
    image: service_image_1,
    icon: WrenchScrewdriverIcon,
  },
  {
    title: 'engine repair',
    desc: 'expert diagnosis and repair  for all engine issues to restore optimal powe.r',
    image: service_image_2,
    icon: CogIcon,
  },
  {
    title: 'brake service',
    desc: 'Brake inspection, pad/shoe replacement and system performance check.',
    image: service_image_3,
    icon: MinusCircleIcon,
  },
  {
    title: 'suspension service',
    desc: 'suspension tuning, repair and replacement for a comfortable and safe ride.',
    image: service_image_4,
    icon: AdjustmentsHorizontalIcon,
  },
  {
    title: 'electrical service',
    desc: 'wiring, battery, lighting and electrical systems and diagnostics and repairs.',
    image: service_image_5,
    icon: BoltIcon,
  },
  {
    title: 'performance upgrades',
    desc: 'enhance power, torque and style with quality performance parts and tuning.',
    image: service_image_6,
    icon: RocketLaunchIcon,
  },
  {
    title: 'tire and wheel service',
    desc: 'tire fitting, balancing and wheel alignment for better grip and safety.',
    image: service_image_7,
    icon: CircleStackIcon,
  },
  {
    title: 'wash and detailing',
    desc: 'premium cleaning and detailing to keep your bike long brand new.',
    image: service_image_8,
    icon: SparklesIcon,
  },
]
</script>

<template>
  <ServicesBanner />
  <div class="container mx-auto">
    <div class="bg-[#121212] pt-4">
      <div class="flex flex-col justify-center items-center uppercase text-white m-4 gap-4">
        <h2 class="flex flex-row justify-center items-center gap-4 text-md md:text-lg">
          <span class="text-[#EF4444]">///</span>Complete care for your ride<span
            class="text-[#EF4444]"
            >///</span
          >
        </h2>
        <h1 class="font-extrabold text-xl md:text-3xl">our services</h1>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center align-items-center gap-4"
      >
        <div
          class="w-full md:max-w-sm border-2 border-[#2F2F30] bg-gradient-to-b from-[#1A1A1B] via-[#222224] to-[#272424] rounded-md"
          v-for="(service, index) in services"
        >
          <img :src="service.image" alt="" />
          <div class="flex flex-col justify-center items-center relative gap-4 p-4 text-white">
            <div
              class="absolute left-1/2 -translate-x-1/2 -top-10 w-20 bg-[#0D0D0D] p-4 rounded-full border-2 border-[#EF4444] top"
            >
              <component v-if="service.icon" :is="service.icon" />
              <WrenchScrewdriverIcon v-else />
            </div>
            <div class="flex flex-col justify-center items-center text-center gap-2 mt-10">
              <h2 class="font-bold text-xl uppercase">{{ service.title }}</h2>
              <p class="capitalize">{{ service.desc }}</p>
            </div>
            <RouterLink class="text-[#EF4444]">Learn more</RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col gap-4 text-white bg-gradient-to-b from-[#1A1A1B] via-[#222224] to-[#272424] my-4 py-4 px-10 border-l-15 border-[#EF4444] rounded-md"
    >
      <p class="text-[#EF4444]">Ready to ride?</p>
      <div class="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <h1 class="text-3xl uppercase font-extrabold">book your service now</h1>
        <button
          class="flex flex-row justify-evenly py-2 items-center max-w-xs md:max-w-3xs lg:max-w-sm btn-primary uppercase font-bold text-lg rounded-lg"
        >
          <CalendarIcon class="max-w-[20px]" />
          <span>book appointment</span>
        </button>
      </div>
      <p>Our team is ready to give your bike the care it deserves.</p>
    </div>
  </div>
</template>
