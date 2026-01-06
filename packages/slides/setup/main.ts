import { defineAppSetup } from '@slidev/types'

export default defineAppSetup(({ router }) => {
  // Handle GitHub Pages SPA redirect
  // The 404.html redirects to /?p=/encoded/path
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search)
    const redirectPath = params.get('p')
    if (redirectPath) {
      // Clean URL and navigate to the intended route
      const decoded = decodeURIComponent(redirectPath)
      window.history.replaceState(null, '', window.location.pathname)
      router.replace(decoded)
    }
  }
})

