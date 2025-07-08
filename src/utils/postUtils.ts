import type { Post, PostModule, SortOption } from '../types'
import { SORT_OPTIONS } from '../constants'

export function createPostFromModule(path: string, post: any): Post {
  const slug = path.split('/').pop()?.replace('.md', '');
  
  return {
    path: `/blog/${slug}`,


    slug,
    title: post.title,
    date: post.date,
    excerpt: '',
    component: null,
    author: post.author,
    tags: post.tags,
    frontmatter: {
      title: post.title,
      date: post.date,
      author: post.author,
      tags: post.tags,
    },
  }
}

export function sortPosts(posts: Post[], sortBy: SortOption): Post[] {
  const sorted = [...posts]
  
  switch (sortBy) {
    case SORT_OPTIONS.NEWEST:
      return sorted.sort((a, b) => new Date(b.date || '').getTime() - new Date(a.date || '').getTime())
    case SORT_OPTIONS.OLDEST:
      return sorted.sort((a, b) => new Date(a.date || '').getTime() - new Date(b.date || '').getTime())
    case SORT_OPTIONS.POPULAR:
      // For now, just return as is since we don't have popularity metrics
      // You can implement this later with upvotes, views, etc.
      return sorted
    default:
      return sorted
  }
}

export function filterPostsBySearch(posts: Post[], searchQuery: string): Post[] {
  if (!searchQuery || !searchQuery.trim()) return posts
  
  const trimmedSearch = searchQuery.trim().toLowerCase()
  return posts.filter(post =>
    post.title.toLowerCase().includes(trimmedSearch) ||
    post.tags.some(tag => tag.toLowerCase().includes(trimmedSearch)) ||
    post.excerpt.toLowerCase().includes(trimmedSearch)
  )
} 