import { createStore } from 'redux'

function reducer(state={}, action) {
  switch(action.type) {
    case 'NAVIGATE':
      const { page } = action
      return Object.assign({}, state, { page })
  }
  return state
}

const store = createStore(reducer)

export default store
