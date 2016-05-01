export const NAVIGATE     = 'NAVIGATE'
export const UUID_ADD     = 'UUID_ADD'
export const UUID_DELETE  = 'UUID_DELETE'

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

export function deleteUuid(index) {
  return {
    type: UUID_DELETE,
    index
  }
}
