import { ref, provide, inject } from 'vue'

const key = Symbol('search')

export function provideSearch() {
  const search = ref('')
  provide(key, search)
  return search
}

export function useSearch() {
  const search = inject(key) as ReturnType<typeof ref>
  if (!search) throw new Error('Search not provided')
  return search
} 