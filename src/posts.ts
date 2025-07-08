import type { Post, PostModule } from './types'
import { createPostFromModule, sortPosts } from './utils/postUtils'
import { SORT_OPTIONS } from './constants'

export function getPosts(): Post[] {
  const modules = import.meta.glob('./posts/*.md', { eager: true })
  const posts: Post[] = []

  for (const path in modules) {
    const post = modules[path] as PostModule
    
    if (post && post.title) {
      posts.push(createPostFromModule(path, post))
    }
  }

  return sortPosts(posts, SORT_OPTIONS.NEWEST)
}

export function getPost(slug: string): Post | undefined {
  const posts = getPosts()
  return posts.find(p => p.slug === slug)
}


