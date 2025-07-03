<template>
  <div class="space-y-6 bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen p-8 rounded-xl shadow-lg">
    <!-- Post Content -->
    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md p-8 shadow-sm">
      <!-- Post Meta -->
      <div class="flex items-center space-x-2 mb-4">
        <span class="text-sm text-gray-500 dark:text-gray-400">Posted by</span>
        <router-link to="/about" class="text-sm text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors">{{ post?.author || DEFAULT_AUTHOR }}</router-link>
        <span class="text-sm text-gray-400">•</span>
        <span class="text-sm text-gray-500 dark:text-gray-400">{{ formatRelativeDate(post?.date) }}</span>
      </div>

      <!-- Post Title -->
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">{{ post?.title }}</h1>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mb-8">
        <span 
          v-for="tag in post?.tags" 
          :key="tag"
          class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm text-gray-700 dark:text-white rounded-full"
        >
          {{ tag }}
        </span>
      </div>

      <!-- Post Content -->
      <div class="prose prose-gray dark:prose-invert max-w-none bg-white dark:bg-gray-800 rounded-md">
        <component :is="postComponent" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import { getPosts } from '../posts'
import { formatRelativeDate } from '../utils/dateUtils'
import { DEFAULT_AUTHOR } from '../constants'

interface Props {
  postSlug: string
}

const props = defineProps<Props>()

const posts = getPosts()

const post = computed(() => 
  posts.find(p => p.slug === props.postSlug)
)

const postComponent = computed(() => 
  post.value?.component
)
</script>

<style>
.prose {
  color: #374151;
}

.dark .prose {
  color: #d1d5db;
}

.prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6 {
  color: #111827;
  font-weight: 600;
  margin-top: 1.5em;
  margin-bottom: 0.5em;
}

.prose h1 {
  font-size: 2.25rem;
  line-height: 2.5rem;
}

.prose h2 {
  font-size: 1.875rem;
  line-height: 2.25rem;
}

.prose h3 {
  font-size: 1.5rem;
  line-height: 2rem;
}

.dark .prose h1, .dark .prose h2, .dark .prose h3, .dark .prose h4, .dark .prose h5, .dark .prose h6 {
  color: #f9fafb;
}

.prose a {
  color: #3b82f6;
}

.prose a:hover {
  color: #2563eb;
}

.dark .prose a {
  color: #60a5fa;
}

.dark .prose a:hover {
  color: #93c5fd;
}

.prose code {
  background-color: #f3f4f6;
  color: #111827;
  padding: 0.125rem 0.25rem;
  border-radius: 0.25rem;
}

.dark .prose code {
  background-color: #374151;
  color: #f9fafb;
}

.prose pre {
  background-color: #f9fafb;
  color: #111827;
  border-radius: 0.5rem;
  padding: 1rem;
  overflow-x: auto;
}

.dark .prose pre {
  background-color: #1f2937;
  color: #f9fafb;
}

.prose blockquote {
  border-left-color: #d1d5db;
  color: #6b7280;
}

.dark .prose blockquote {
  border-left-color: #4b5563;
  color: #9ca3af;
}
</style>
