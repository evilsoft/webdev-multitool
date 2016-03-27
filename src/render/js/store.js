import m from 'mithril'

import { createStore } from 'redux'

import { NAVIGATE } from './actions'

function reducer(state={}, action) {
  switch(action.type) {
    case NAVIGATE:
      const { page } = action
      return Object.assign({}, state, { page })
  }
  return state
}

const store = createStore(reducer)

export function connect(Component) {
  return {
    view() {
      const state = store.getState()
      return (
        <Component dispatch={store.dispatch} {...state}/>
      )
    }
  }
}

export default store
