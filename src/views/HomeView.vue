<script setup lang="ts">
import Banner from '@/components/Banner.vue'
import Category from '@/components/Category.vue'

//Category imports
import helmet from '@/assets/helmet.png'
import tire from '@/assets/tire.png'
import oil from '@/assets/oil.png'
import brakes from '@/assets/brakes.png'
import accessories from '@/assets/accessories.png'
import FeaturedProducts from '@/components/FeaturedProducts.vue'
import Services from '@/components/Services.vue'
import TopFooter from '@/components/TopFooter.vue'

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
    <Category :data="summary" />
    <FeaturedProducts :data="summary" />
    <Services :data="summary" />
  </main>
</template>
