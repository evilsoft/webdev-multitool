export const NAVIGATE = 'NAVIGATE'
export const UUID_ADD = 'UUID_ADD'

export function navigate(currentPage) {
  return {
    type: NAVIGATE,
    currentPage
  }
}

export function addUuid(uuids) {
  return {
    type: UUID_ADD,
    uuids
  }
}
