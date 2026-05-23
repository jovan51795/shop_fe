<script setup lang="ts">
import Banner from '@/components/Banner.vue'
import Sections from '@/components/Sections.vue'

//Category imports
import helmet from '@/assets/helmet.png'
import tire from '@/assets/tire.png'
import oil from '@/assets/oil.png'
import brakes from '@/assets/brakes.png'
import accessories from '@/assets/accessories.png'

const summary = {
  title: 'Shop By Category',
  images: [
    {
      alt: 'Helmets',
      img: helmet,
    },
    {
      alt: 'Tires',
      img: tire,
    },
    {
      alt: 'Oil & Fluids',
      img: oil,
    },
    {
      alt: 'Brake Systems',
      img: brakes,
    },
    {
      alt: 'Accessories',
      img: accessories,
    },
    {
      alt: 'Helmets',
      img: helmet,
    },
    {
      alt: 'Tires',
      img: tire,
    },
    {
      alt: 'Oil & Fluids',
      img: oil,
    },
    {
      alt: 'Brake Systems',
      img: brakes,
    },
    {
      alt: 'Accessories',
      img: accessories,
    },
  ],
}
</script>

<template>
  <main>
    <Banner />
    <Sections :data="summary" />
  </main>
</template>
