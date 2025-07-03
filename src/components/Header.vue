<template>
  <header class="bg-white text-gray-900 dark:bg-black dark:text-white sticky top-0 z-50 shadow-lg w-full border-b border-gray-200 dark:border-gray-700 dark:border dark:border-gray-700 rounded-b-lg">
    <div class="max-w-4xl mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <!-- Mobile Menu Button -->
        <div class="lg:hidden">
          <button @click="isOpen = !isOpen" class="text-gray-900 dark:text-white focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        <!-- Search Bar -->
        <div class="flex-1 max-w-md mx-4">
          <form @submit.prevent="handleSearch" class="relative">
            <input 
              type="text" 
              placeholder="Search posts..."
              class="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
              v-model="search"
            >
            <button 
              type="submit"
              class="absolute right-3 top-2.5 w-4 h-4 text-gray-400 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-100 transition-colors"
            >
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </form>
        </div>

        <!-- Theme Toggle Button -->
        <div class="flex items-center space-x-4">
          <button @click="toggleTheme" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors" :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'">
            <svg v-if="theme === 'dark'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.95 7.05l-.71-.71M6.34 6.34l-.71-.71M12 7a5 5 0 100 10 5 5 0 000-10z" />
            </svg>
            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isOpen" class="lg:hidden mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div class="space-y-2">
          <router-link to="/" class="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition-colors" @click="isOpen = false">Home</router-link>
          <router-link to="/blog" class="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition-colors" @click="isOpen = false">Blog</router-link>
          <router-link to="/about" class="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition-colors" @click="isOpen = false">About</router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useSearch } from '../composables/useSearch'

const router = useRouter()
const isOpen = ref(false)
const theme = ref('dark')
const search = useSearch()

const handleSearch = () => {
  const trimmedSearch = (search as any).value?.trim()
  if (trimmedSearch) {
    router.push('/blog')
  }
}

const setTheme = (value: string) => {
  theme.value = value
  if (value === 'dark') {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

const toggleTheme = () => {
  setTheme(theme.value === 'dark' ? 'light' : 'dark')
}

onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved === 'light' || saved === 'dark') {
    setTheme(saved)
  } else {
    // Default to dark
    setTheme('dark')
  }
})
</script>
