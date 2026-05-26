<script setup lang="ts">
import AuthContainer from '@/components/auth/AuthContainer.vue'
import SocialAuth from '@/components/auth/SocialAuth.vue'
import { EnvelopeIcon, KeyIcon } from '@heroicons/vue/24/outline'
import { UserIcon, UsersIcon } from '@heroicons/vue/20/solid'
import { RouterLink } from 'vue-router'
</script>

<template>
  <AuthContainer>
    <div class="bg-[#0D1117] p-5 md:w-xl w-xs rounded-lg border-2 border-[#1F2937]">
      <div class="flex flex-col justify-center items-center text-white mt-5">
        <h1 class="capitalize md:text-2xl text-lg font-bold">create an acount</h1>
        <span>Join motoshop and start your journey</span>
      </div>
      <div class="mt-5">
        <form action="#">
          <div class="md:mx-5 mx-2">
            <div class="h-[100px] md:h-[80]">
              <label for="email">Full Name</label>
              <div class="flex flex-row bg-[#161B22] border-2 border-[#2A3441] rounded-lg">
                <UserIcon class="w-5 m-2" />
                <input type="text" class="outline-none p-2" />
              </div>
              <span class="text-[#EF4444] text-xs capitalize hidden">Fullname is required</span>
            </div>
            <div class="h-[100px] md:h-[80]">
              <label for="email">Email Address</label>
              <div class="flex flex-row bg-[#161B22] border-2 border-[#2A3441] rounded-lg">
                <EnvelopeIcon class="w-5 m-2" />
                <input type="text" class="outline-none p-2" />
              </div>
              <span class="text-[#EF4444] text-xs capitalize hidden">email is required</span>
            </div>
            <div class="h-[100px] md:h-[80]">
              <label for="email">Password</label>
              <div class="flex flex-row bg-[#161B22] border-2 border-[#2A3441] rounded-lg">
                <KeyIcon class="w-5 m-2" />
                <input type="password" class="outline-none p-2" />
              </div>
              <span v-if="show" class="text-[#EF4444] text-xs capitalize hidden"
                >Password is required</span
              >
            </div>
            <div class="h-[100px] md:h-[80]">
              <label for="email">Confirm Password</label>
              <div class="flex flex-row bg-[#161B22] border-2 border-[#2A3441] rounded-lg">
                <KeyIcon class="w-5 m-2" />
                <input type="password" class="outline-none p-2" />
              </div>
              <span class="text-[#EF4444] text-xs capitalize hidden">Password is required</span>
            </div>
            <div class="flex justify-start items-center mb-5">
              <input type="checkbox" name="remember me" id="" class="text-[#EF4444] mr-3" />
              <span
                class="text-white text-xs capitalize font-bold flex justify-center items-center gap-2"
              >
                <span>I Agree to the</span>
                <a href="" class="link">Terms and condition</a>
                <span>and</span>
                <a href="" class="link">Privacy POlicy</a>
              </span>
            </div>
            <div class="mt-2">
              <button class="btn-primary p-3 text-white font-bold rounded-md">Signup</button>
            </div>
            <div class="flex items-center gap-4 text-gray-400 my-5">
              <div class="h-px flex-1 bg-[#2A3441]"></div>
              <span class="text-sm">or continue with</span>
              <div class="h-px flex-1 bg-[#2A3441]"></div>
            </div>
            <SocialAuth />
            <div
              class="flex flex-row justify-center items-center mt-5 capitalize text-sm gap-2 font-bold"
            >
              <span>Already have and account?</span>

              <RouterLink to="/signin" class="text-[#EF4444] hover:text-[#DC2626]"
                >Signin</RouterLink
              >
            </div>
          </div>
        </form>
      </div>
    </div>
  </AuthContainer>
</template>
