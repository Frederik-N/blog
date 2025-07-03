<template>
  <div class="min-h-screen bg-[#dae0e6] text-gray-900 dark:bg-black dark:text-white transition-colors duration-300">
    <div class="flex w-full min-h-screen">
      <!-- Left Sidebar -->
      <aside class="hidden md:block w-64 bg-white text-gray-900 border-r border-gray-300 dark:bg-black dark:text-white dark:border-gray-800 p-4">
        <LeftSidebar />
      </aside>
      
      <!-- Main Content -->
      <main class="flex-1 flex flex-col bg-white dark:bg-black text-gray-900 dark:text-white px-0 py-8 md:py-12 transition-colors duration-300">
        <div class="w-full">
          <Header />
        </div>
        <div class="w-full flex-1 flex flex-col mt-6 mb-8">
          <router-view />
        </div>
      </main>
      
      <!-- Right Sidebar -->
      <aside class="hidden lg:block w-80 bg-white text-gray-900 border-l border-gray-300 dark:bg-black dark:text-white dark:border-gray-800 p-4">
        <RightSidebar />
      </aside>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
import LeftSidebar from './components/LeftSidebar.vue'
import RightSidebar from './components/RightSidebar.vue'
import { provideSearch } from './composables/useSearch'

provideSearch()
</script>

