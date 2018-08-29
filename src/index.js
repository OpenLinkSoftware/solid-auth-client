import SolidAuthClient from './solid-auth-client'

// Export a singleton instance of SolidAuthClient
const auth = new SolidAuthClient()

// Bind methods to instance, so they can be invoked as regular functions
// (e.g., to pass around the fetch function)
Object.getOwnPropertyNames(SolidAuthClient.prototype).forEach(property => {
  const value = auth[property]
  if (typeof value === 'function') {
    auth[property] = value.bind(auth)
  }
})

// Export the instance as an object for backward compatibility
// (should become a default export of auth)
module.exports = auth

// Expose window.SolidAuthClient for backward compatibility
if (typeof window !== 'undefined') {
  let warned = false
  Object.defineProperty(window, 'SolidAuthClient', {
    enumerable: true,
    get: () => {
      if (!warned) {
        warned = true
        console.warn('window.SolidAuthClient has been deprecated.')
        console.warn('Please use window.solid.auth instead.')
      }
      return auth
    }
  })
}
