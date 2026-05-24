<template>
  <Disclosure
    as="nav"
    class="fixed top-0 left-0 w-full my-auto h-[80px] z-50 bg-[#0B0F14] dark:after:pointer-events-none dark:after:absolute dark:after:inset-x-0 dark:after:bottom-0 dark:after:h-px dark:after:bg-white/10 flex justify-center"
    v-slot="{ open }"
    style="align-items: center"
  >
    <div class="mx-auto px-2 sm:px-6 lg:px-8 w-full">
      <div class="relative flex items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center md:hidden">
          <!-- Mobile menu button-->

          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
          >
            <span class="absolute -inset-0.5"></span>
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block size-6" aria-hidden="true" />
            <XMarkIcon v-else class="block size-6" aria-hidden="true" />
          </DisclosureButton>
          <DisclosurePanel class="md:hidden absolute top-8">
            <div class="space-y-1 px-2 pt-2 pb-3">
              <DisclosureButton
                v-for="item in navigation"
                :key="item.name"
                as="a"
                :href="item.href"
                :class="[
                  item.current
                    ? 'bg-gray-900 text-white dark:bg-gray-950/50'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium',
                ]"
                :aria-current="item.current ? 'page' : undefined"
                >{{ item.name }}</DisclosureButton
              >
            </div>
          </DisclosurePanel>
        </div>

        <!-- LOGO -->
        <div class="flex shrink-0 items-center">
          <img
            class="h-8 w-auto hidden md:block"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
          />
        </div>

        <!-- MAIN NAV -->
        <div class="flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="hidden sm:ml-6 md:block">
            <div class="flex space-x-4">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                :class="[
                  item.current
                    ? 'text-[#EF4444] border-b-2 border-[#EF4444]'
                    : 'text-slate-300 border-b-2 border-transparent hover:text-white',
                  'flex items-center h-20 px-3 lg:text-sm  py-2 text-xs font-medium transition uppercase',
                ]"
                :aria-current="item.current ? 'page' : undefined"
                >{{ item.name }}</a
              >
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <button
            type="button"
            class="relative rounded-full p-1 text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:hover:text-white"
          >
            <span class="absolute -inset-1.5"></span>
            <span class="sr-only">View notifications</span>
            <BellIcon class="size-6" aria-hidden="true" />
          </button>

          <!-- Profile dropdown -->
          <Menu as="div" class="relative ml-3">
            <MenuButton
              class="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              <span class="absolute -inset-1.5"></span>
              <span class="sr-only">Open user menu</span>
              <img
                class="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </MenuButton>

            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg outline outline-black/5 dark:bg-gray-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10"
              >
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100 outline-hidden dark:bg-white/5' : '',
                      'block px-4 py-2 text-sm text-gray-700 dark:text-gray-300',
                    ]"
                    >Your profile</a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100 outline-hidden dark:bg-white/5' : '',
                      'block px-4 py-2 text-sm text-gray-700 dark:text-gray-300',
                    ]"
                    >Settings</a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100 outline-hidden dark:bg-white/5' : '',
                      'block px-4 py-2 text-sm text-gray-700 dark:text-gray-300',
                    ]"
                    >Sign out</a
                  >
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>
  </Disclosure>
</template>

<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/vue'

import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'HOME', href: '#', current: true },
  { name: 'SHOP', href: '#', current: false },
  { name: 'SERVICES', href: '#', current: false },
  { name: 'BOOKING', href: '#', current: false },
  { name: 'ABOUT US', href: '#', current: false },
  { name: 'CONTACT', href: '#', current: false },
]
</script>
