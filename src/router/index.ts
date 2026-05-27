import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import(`@/layouts/DefaultLayout.vue`),
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import(`@/views/HomeView.vue`),
        },
        {
          path: 'services',
          name: 'SErvices',
          component: () => import(`@/views/services/ServicesView.vue`),
        },
        {
          path: 'about',
          name: 'about',
          component: () => import(`@/views/about-us/AboutView.vue`),
        },
        {
          path: ':id/details',
          name: 'Details',
          component: () => import(`@/views/products/ProductDetails.vue`),
        },
      ],
    },
    {
      path: '/',
      name: 'auth',
      component: () => import(`@/layouts/AuthLayout.vue`),
      children: [
        {
          path: 'signin',
          name: 'Signin',
          component: () => import(`@/views/auth/Signin.vue`),
        },
        {
          path: 'signup',
          name: 'Signup',
          component: () => import(`@/views/auth/Signup.vue`),
        },
      ],
    },
  ],
})

export default router
