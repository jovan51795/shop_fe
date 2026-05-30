<script setup lang="ts">
import AboutUsBanner from '@/components/about_us/AboutUsBanner.vue'
import display from '@/assets/about_us/display.png'
import about_us_b_desktop from '@/assets/about_us/about_us_b_desktop.png'
import about_us_b_tab from '@/assets/about_us/about_us_b_tab.png'
import about_us_b_mobile from '@/assets/about_us/about_us_b_mobile.png'
import {
  ChevronRightIcon,
  ShieldCheckIcon,
  TruckIcon,
  HeartIcon,
  UserGroupIcon,
} from '@heroicons/vue/20/solid'

import { RouterLink } from 'vue-router'
const values = [
  {
    title: 'premium quality',
    desc: 'we offer only top-grade products from trusted brands to ensure safety, durability, and performance.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'expert support',
    desc: 'Our team of riders and experts are always ready to help you find the right gear and solutions.',
    icon: UserGroupIcon,
  },
  {
    title: 'Fast and reliable',
    desc: 'Quick shipping and reliable services so you can spend less time waiting and more time riding.',
    icon: TruckIcon,
  },
  {
    title: 'Rider community',
    desc: "We're more than the store-we're a community of riders who share the same passion for the road.",
    icon: HeartIcon,
  },
]
</script>

<template>
  <div class="container mx-auto">
    <AboutUsBanner />
    <div class="bg-gradient-to-b from-[#1A1A1B] via-[#222224] to-[#272424] md:p-10">
      <div class="text-white grid grid-cols-1 lg:grid-cols-2 gap-2">
        <div class="flex flex-col justify-center gap-4 m-4 md:m-1">
          <h2 class="text-lg"><span class="text-primary mr-4">///</span>Who we are</h2>
          <div class="text-4xl lg:text-4xl font-extrabold uppercase">
            <h1>Built for riders.</h1>
            <h1 class="text-primary">By riders</h1>
          </div>
          <p class="text-lg">
            Motoshop was founded with a simple mission - to bring high-quality motocycle gear,
            parts, and accessories to riders who live for the road, whether you're daily commuter,
            an adventure seeker, or an speed enthusiast, we've got everything you need to ride with
            confident and style.
          </p>
          <RouterLink
            to="/home"
            class="flex justify-center items-center font-bold uppercase text-center p-2 border-2 border-[#EF4444] hover:bg-[#0A0A0F] md:w-2xs"
          >
            <span>shop now </span>
            <ChevronRightIcon class="w-[30px]" />
          </RouterLink>
        </div>
        <div class="hidden lg:block">
          <img :src="display" alt="" srcset="" class="h-full" />
        </div>
      </div>
    </div>
    <div class="text-white m-4">
      <div class="flex flex-col justify-center items-center gap-4">
        <h3 class="text-primary uppercase text-bold"><span class="mr-4">///</span>our values</h3>
        <div class="text-center">
          <div
            class="flex flex-row justify-center items-center gap-2 text-2xl md:text-4xl uppercase font-extrabold"
          >
            <h1>Quality.</h1>
            <h1>Trust.</h1>
            <h1 class="text-primary">Passion.</h1>
          </div>
          <p>These are the values that drive everything we do at Motoshop</p>
        </div>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-4">
        <div
          class="flex flex-col justify-center items-center text-center border-t md:border-t-0 md:border-l-2 md:border-r-2 border-zinc-800/60 gap-2 p-2"
          v-for="(value, index) in values"
          :key="index"
        >
          <component :is="value.icon" class="max-w-[40px] text-primary"></component>
          <h2 class="uppercase font-bold">{{ value.title }}</h2>
          <p>
            {{ value.desc }}
          </p>
        </div>
      </div>
    </div>
    <div class="relative text-white">
      <img :src="about_us_b_desktop" alt="" class="hidden lg:block" />
      <img :src="about_us_b_tab" alt="" class="hidden md:block lg:hidden" />
      <img :src="about_us_b_mobile" alt="" class="md:hidden w-full" />
      <div class="absolute top-0 bottom-0 flex flex-col justify-center px-5 md:p-10">
        <h2 class="text-lg"><span class="text-primary mr-2">///</span>Join the ride</h2>
        <div class="xs:text-lg sm:text-4xl font-extrabold uppercase my-2 md:my-4">
          <h1>more than a shop</h1>
          <h1 class="text-primary">We're a community</h1>
        </div>

        <p class="text-sm">
          Thank you for being a part of Motoshop family. Let's ride further, together.
        </p>
        <RouterLink
          to="/contact"
          class="xs:text-sm flex justify-center items-center font-bold uppercase text-center p-2 border-2 border-[#EF4444] hover:bg-[#0A0A0F] md:w-2xs mt-2 md:mt-4"
        >
          <span>Contact us </span>
          <ChevronRightIcon class="w-[30px]" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
