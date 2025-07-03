<template>
  <aside class="w-80 bg-secondary min-h-screen p-4 pr-12 sticky top-32">
    <div class="space-y-6">
      <!-- Trending Posts -->
      <div class="space-y-2">
        <h3 class="text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
          Trending Posts
        </h3>
        <div class="space-y-3">
          <router-link 
            v-for="post in trendingPosts" 
            :key="post.slug"
            :to="post.path"
            class="block p-4 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-all duration-200 border border-gray-300 dark:border-gray-600 shadow-md hover:shadow-lg"
          >
            <div class="flex-1 min-w-0">
              <h4 class="text-sm font-medium text-gray-900 dark:text-white line-clamp-2 mb-1">
                {{ post.title }}
              </h4>
              <div class="text-xs text-gray-500 dark:text-gray-300">
                {{ formatRelativeDate(post.date) }}
              </div>
            </div>
          </router-link>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="space-y-2">
        <h3 class="text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
          Quick Actions
        </h3>
        <div class="space-y-2">
          <a 
            :href="`mailto:${CONTACT_EMAIL}`"
            class="block w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium text-center"
          >
            Contact Me
          </a>
        </div>
      </div>

      <!-- Social Links -->
      <div class="space-y-2">
        <h3 class="text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
          Connect
        </h3>
        <div class="flex space-x-3">
          <a :href="LINKEDIN_URL" class="text-gray-500 dark:text-gray-300 hover:text-blue-600 transition-colors">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { getPosts } from '../posts'
import { formatRelativeDate } from '../utils/dateUtils'
import { CONTACT_EMAIL, LINKEDIN_URL } from '../constants'

const posts = getPosts()
const trendingPosts = computed(() => posts.slice(0, 4))
</script> 