<template>
  <aside class="w-64 bg-secondary min-h-screen p-4 pr-12 sticky top-32">
    <div class="space-y-6">
      <!-- Logo/Brand -->
      <div class="pb-4 border-b border-gray-700 dark:border-gray-700">
        <router-link to="/" class="text-xl font-bold text-gray-900 dark:text-white">
          Frederik Sahlholdt
        </router-link>
      </div>

      <!-- Navigation -->
      <nav class="space-y-2">
        <h3 class="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-3">
          Navigation
        </h3>
        <router-link 
          to="/" 
          class="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          :class="$route.path === '/' ? 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'"
        >
          <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
          </svg>
          Home
        </router-link>
        <router-link 
          to="/blog" 
          class="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          :class="$route.path === '/blog' ? 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'"
        >
          <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
          </svg>
          Blog
        </router-link>
        <router-link 
          to="/about" 
          class="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          :class="$route.path === '/about' ? 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'"
        >
          <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
          About
        </router-link>
      </nav>

      <!-- Recent Posts -->
      <div class="space-y-2">
        <h3 class="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-3">
          Recent Posts
        </h3>
        <div class="space-y-2">
          <router-link 
            v-for="post in recentPosts" 
            :key="post.slug"
            :to="post.path"
            class="block text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md p-2 transition-colors cursor-pointer"
          >
            <span class="font-medium">{{ post.title }}</span>
            <div class="text-xs text-gray-500 dark:text-gray-500">{{ formatSimpleDate(post.date) }}</div>
          </router-link>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { getPosts } from '../posts'
import { formatSimpleDate } from '../utils/dateUtils'

const recentPosts = getPosts().slice(0, 3)
</script> 