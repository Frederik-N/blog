export interface Post {
  path: string
  slug: string
  title: string
  date: string
  excerpt: string
  component: any
  author: string
  tags: string[]
  frontmatter: {
    title: string
    date: string
    author: string
    tags: string[]
  }
}

export interface PostModule {
  title: string
  date: string
  author: string
  tags: string[]
  default: any
}

export type SortOption = 'newest' | 'oldest' | 'popular'

export interface SearchState {
  value: string
} 