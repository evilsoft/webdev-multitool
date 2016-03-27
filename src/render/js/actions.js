export const NAVIGATE = 'NAVIGATE'

export function navigate(page) {
  return {
    type: 'NAVIGATE',
    page
  }
}
