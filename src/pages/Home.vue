<template>
  <div class="w-full flex flex-col items-center gap-8 bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen mx-2">
    <!-- Page Header -->
    <div class="w-full flex items-center justify-between mb-4 -mt-12">
    
    </div>

    <!-- About This Blog -->
    <div class="w-full">
      <div class="max-w-4xl mx-auto p-8">
        <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">About This Blog</h2>
        <p class="text-gray-700 dark:text-white leading-relaxed mb-4">
          Welcome to my personal blog at frederiksahlholdt.com! This is where I share thoughts and experiences from my various hobbies and interests. 
          I write about anything that catches my attention, from software development and technology to sports, gaming, and personal finance.
        </p>
        <p class="text-gray-700 dark:text-white leading-relaxed mb-4">
          You'll find posts about software development (.NET, web development with Vite and Vue, AI tools), running and sports (football, tennis), 
          PC building, finance (stocks, personal finance), Counter-Strike 2, and much more. This blog is built with Vite and Vue as a static site generator.
        </p>
        <div class="flex justify-between text-sm border-t border-gray-300 dark:border-gray-700 pt-4">
          <div class="flex items-center space-x-4">
            <div class="flex items-center space-x-2">
              <span class="text-gray-500 dark:text-gray-300">Posts</span>
              <span class="text-gray-900 dark:text-white font-medium">{{ totalPosts }}</span>
            </div>
            <div class="flex items-center space-x-2">
              <span class="text-gray-500 dark:text-gray-300">Created</span>
              <span class="text-gray-900 dark:text-white font-medium">2025</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getPosts } from '../posts'

const posts = getPosts()
const totalPosts = ref(posts.length)
</script>
