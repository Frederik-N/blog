<template>
  <article class="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-200 shadow-md hover:shadow-lg">
    <div class="p-6">
      <!-- Post Header -->
      <div class="flex items-center space-x-2 mb-3">
        <span class="text-xs text-gray-500 dark:text-gray-400">Posted by</span>
        <router-link to="/about" class="text-xs text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors">Frederik Sahlholdt</router-link>
        <span class="text-xs text-gray-400">•</span>
        <span class="text-xs text-gray-500 dark:text-gray-400">{{ formatRelativeDate(post.date) }}</span>
      </div>

      <!-- Post Title -->
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
        <router-link :to="post.path">{{ post.title }}</router-link>
      </h3>

      <!-- Post Excerpt -->
      <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">{{ post.excerpt }}</p>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2">
        <span 
          v-for="tag in post.tags" 
          :key="tag"
          class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-xs text-gray-700 dark:text-white rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors font-medium"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Post } from '../types'
import { formatRelativeDate } from '../utils/dateUtils'

defineProps<{
  post: Post
}>()
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
