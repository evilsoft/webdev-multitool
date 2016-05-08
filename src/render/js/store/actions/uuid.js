export const UUID_ADD     = 'UUID_ADD'
export const UUID_DELETE  = 'UUID_DELETE'
export const UUID_CLEAR   = 'UUID_CLEAR'

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

export function clearUuid() {
  return {
    type: UUID_CLEAR
  }
}
