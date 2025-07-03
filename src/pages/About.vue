<template>
  <div class="space-y-6 bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen p-8 rounded-xl shadow-lg">
    <!-- Page Header -->
    <div class="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md p-6 shadow-md">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h1>
      <p class="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
        Hi, I'm Frederik Sahlholdt. Welcome to my personal blog at <span class="font-semibold">frederiksahlholdt.com</span>! I'm a developer and hobby enthusiast who loves to share experiences and knowledge through writing.
      </p>
    </div>

    <!-- Profile Section -->
    <div class="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md p-6 shadow-md">
      <div class="flex items-start space-x-6">
        <!-- Avatar -->
        <div class="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
          <svg class="w-12 h-12 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
        </div>

        <!-- Profile Info -->
        <div class="flex-1">
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Frederik Sahlholdt</h2>
          <p class="text-gray-600 dark:text-gray-400 mb-2">Software Developer</p>
          <p class="text-gray-600 dark:text-gray-400 mb-4">4 years work experience • Bachelor in Data Science</p>
          
          <!-- Stats -->
          <div class="grid grid-cols-3 gap-4 mb-6">
            <div class="text-center">
              <div class="text-2xl font-bold text-gray-900 dark:text-white">1</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Posts</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-gray-900 dark:text-white">4</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-gray-900 dark:text-white">5+</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Hobbies</div>
            </div>
          </div>

          <!-- Bio -->
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            My blog is a place for anything I want to write about in my hobbies, so it's not limited to just one topic. Some of the things you'll find here include:
          </p>
          <ul class="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
            <li>Software development (.NET, web development with Vite, Vue, ASP.NET, AI tools, etc.)</li>
            <li>Running and sports (football, tennis, etc.)</li>
            <li>PC building and hardware</li>
            <li>Finance (stocks, personal finance, etc.)</li>
            <li>Counter-Strike 2 and gaming</li>
            <li>And anything else that inspires me!</li>
          </ul>
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
            This blog is built as a static site generator (SSG) using Vite and Vue. I believe in learning and growing through diverse interests, and I hope to connect with others who share similar passions.
          </p>
        </div>
      </div>
    </div>

    <!-- Interests Section -->
    <div class="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md p-6 shadow-md">
      <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Interests & Hobbies</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div class="flex items-center space-x-2">
          <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
          <span class="text-gray-700 dark:text-gray-300">Software Development</span>
        </div>
        <div class="flex items-center space-x-2">
          <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
          <span class="text-gray-700 dark:text-gray-300">Running</span>
        </div>
        <div class="flex items-center space-x-2">
          <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
          <span class="text-gray-700 dark:text-gray-300">Sports</span>
        </div>
        <div class="flex items-center space-x-2">
          <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
          <span class="text-gray-700 dark:text-gray-300">PC Building</span>
        </div>
        <div class="flex items-center space-x-2">
          <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
          <span class="text-gray-700 dark:text-gray-300">Finance</span>
        </div>
        <div class="flex items-center space-x-2">
          <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
          <span class="text-gray-700 dark:text-gray-300">Gaming</span>
        </div>
      </div>
    </div>

    <!-- Tech Skills Section -->
    <div class="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md p-6 shadow-md">
      <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Technologies & Tools</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div class="flex items-center space-x-2">
          <div class="w-2 h-2 bg-green-500 rounded-full"></div>
          <span class="text-gray-700 dark:text-gray-300">.NET</span>
        </div>
        <div class="flex items-center space-x-2">
          <div class="w-2 h-2 bg-green-500 rounded-full"></div>
          <span class="text-gray-700 dark:text-gray-300">Vue.js</span>
        </div>
        <div class="flex items-center space-x-2">
          <div class="w-2 h-2 bg-green-500 rounded-full"></div>
          <span class="text-gray-700 dark:text-gray-300">Vite</span>
        </div>
        <div class="flex items-center space-x-2">
          <div class="w-2 h-2 bg-green-500 rounded-full"></div>
          <span class="text-gray-700 dark:text-gray-300">ASP.NET</span>
        </div>
        <div class="flex items-center space-x-2">
          <div class="w-2 h-2 bg-green-500 rounded-full"></div>
          <span class="text-gray-700 dark:text-gray-300">AI Tools</span>
        </div>
        <div class="flex items-center space-x-2">
          <div class="w-2 h-2 bg-green-500 rounded-full"></div>
          <span class="text-gray-700 dark:text-gray-300">TypeScript</span>
        </div>
      </div>
    </div>
  </div>
</template>
