import { writable } from 'svelte/store'

const BASE = import.meta.env.BASE_URL || '/'

function normalize(pathname: string): string {
  let p = pathname
  if (BASE !== '/' && p.startsWith(BASE)) {
    p = '/' + p.slice(BASE.length)
  }
  return p === '' ? '/' : p
}

/** Prefixes an app-relative path (e.g. "/about") with the deploy base path, for use in href attributes. */
export function href(path: string): string {
  return path === '/' ? BASE : BASE + path.slice(1)
}

export const currentPath = writable(normalize(window.location.pathname))

export function navigate(path: string) {
  const full = href(path)
  if (window.location.pathname !== full) {
    window.history.pushState({}, '', full)
  }
  currentPath.set(path)
  window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
}

window.addEventListener('popstate', () => {
  currentPath.set(normalize(window.location.pathname))
})

export function link(node: HTMLAnchorElement) {
  function onClick(e: MouseEvent) {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
    if (node.target === '_blank') return
    e.preventDefault()
    navigate(normalize(node.pathname))
  }
  node.addEventListener('click', onClick)
  return {
    destroy() {
      node.removeEventListener('click', onClick)
    },
  }
}
