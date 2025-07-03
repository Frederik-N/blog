import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Blog from '../pages/Blog.vue'
import Post from '../pages/Post.vue'
import { getPosts } from '../posts'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/blog', component: Blog },
  ...getPosts().map(post => ({
    path: post.path,
    component: Post,
    props: { postSlug: post.slug }
  })),
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
