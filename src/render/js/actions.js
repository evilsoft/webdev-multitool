export const NAVIGATE = 'NAVIGATE'

export function navigate(currentPage) {
  return {
    type: 'NAVIGATE',
    currentPage
  }
}
