<template>
  <div class="space-y-6 bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen p-8 rounded-xl shadow-lg">
    <!-- Page Header -->
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white">All Posts</h1>
      <div class="flex items-center space-x-2">
        <select 
          v-model="sortBy" 
          class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white text-sm rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="popular">Most Popular</option>
        </select>
      </div>
    </div>

    <!-- Posts Feed -->
    <div class="space-y-4">
      <BlogPostPreview 
        v-for="post in sortedAndFilteredPosts" 
        :key="post.slug" 
        :post="post" 
      />
    </div>

    <!-- No Posts Message -->
    <div v-if="sortedAndFilteredPosts.length === 0" class="text-center py-12">
      <p class="text-gray-600 dark:text-gray-400 text-lg">No posts found matching your criteria.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

import { getPosts } from '../posts'
import BlogPostPreview from '../components/BlogPostPreview.vue'
import { useSearch } from '../composables/useSearch'
import { filterPostsBySearch, sortPosts } from '../utils/postUtils'
import { SORT_OPTIONS } from '../constants'

const search = useSearch()
const sortBy = ref(SORT_OPTIONS.NEWEST)
const posts = getPosts()

const filteredPosts = computed(() => 
  filterPostsBySearch(posts, search.value as string)
)

const sortedAndFilteredPosts = computed(() => 
  sortPosts(filteredPosts.value, sortBy.value)
)
</script>
