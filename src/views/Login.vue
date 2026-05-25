<script setup lang="ts">
import { EnvelopeIcon, KeyIcon } from '@heroicons/vue/24/outline'
import IconGoogle from '@/components/icons/IconGoogle.vue'
import IconFacebook from '@/components/icons/IconFacebook.vue'
import { ref } from 'vue'
const show = ref(false)
</script>

<template>
  <div
    class="container m-auto pt-10 md:pt-2 bg-[url('../assets/auth/auth_bg_sm.png')] md:bg-[url('../assets/auth/auth_bg_md.png')] lg:bg-[url('../assets/auth/auth_bg.png')] bg-cover bg-center h-screen"
  >
    <div>
      <div class="grid grid-cols-1 justify-items-center align-items-center">
        <img src="../assets/logos/logo.png" class="max-w-40 md:max-w-60" h-auto />
      </div>
      <div class="flex justify-center flex-col items-center h-full">
        <div class="bg-[#0D1117] p-5 md:w-xl w-xs rounded-lg border-2 border-[#1F2937]">
          <div class="flex flex-col justify-center items-center text-white mt-5">
            <h1 class="capitalize md:text-2xl text-lg font-bold">welcome back!</h1>
            <span>Sign in to continue to your account</span>
          </div>
          <div class="mt-5">
            <form action="#">
              <div class="md:mx-5 mx-2">
                <div class="h-[100px] md:h-[111.2px]">
                  <label for="email">Email Address</label>
                  <div class="flex flex-row bg-[#161B22] border-2 border-[#2A3441] rounded-lg">
                    <EnvelopeIcon class="w-5 m-2" />
                    <input type="text" class="outline-none p-2" />
                  </div>
                  <span class="text-[#EF4444] text-xs capitalize">email is required</span>
                </div>
                <div class="h-[100px] md:h-[111.2px]">
                  <label for="email">Password</label>
                  <div class="flex flex-row bg-[#161B22] border-2 border-[#2A3441] rounded-lg">
                    <KeyIcon class="w-5 m-2" />
                    <input type="password" class="outline-none p-2" />
                  </div>
                  <span v-if="show" class="text-[#EF4444] text-xs capitalize"
                    >email is required</span
                  >
                </div>

                <div class="flex justify-end items-center text-[#EF4444] text-xs capitalize">
                  <a href="">forgot password?</a>
                </div>
                <div class="flex justify-start items-center mb-5">
                  <input type="checkbox" name="remember me" id="" class="text-[#EF4444] mr-3" />
                  <span class="text-white text-xs capitalize">Remember me</span>
                </div>
                <div class="mt-2">
                  <button class="w-full p-3 bg-[#EF4444] hover:bg-[#DC2626] rounded-md">
                    LOGIN
                  </button>
                </div>
                <div class="flex items-center gap-4 text-gray-400 my-5">
                  <div class="h-px flex-1 bg-[#2A3441]"></div>
                  <span class="text-sm">or continue with</span>
                  <div class="h-px flex-1 bg-[#2A3441]"></div>
                </div>
                <div class="grid grid-cols-2 gap-2">
                  <div class="w-full">
                    <button
                      @click="show = !show"
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
                <div
                  class="flex flex-row justify-center items-center mt-5 capitalize text-sm gap-2 font-bold"
                >
                  <span>don't have an account?</span>
                  <a href="" class="text-[#EF4444] hover:text-[#DC2626]">register</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
