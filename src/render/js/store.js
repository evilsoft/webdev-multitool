import m from 'mithril'

import { createStore } from 'redux'

import {
  NAVIGATE,
  UUID_ADD,
  UUID_DELETE
} from './actions'

function reducer(state={}, action) {
  switch(action.type) {
    case NAVIGATE:
      const { currentPage } = action
      return Object.assign({}, state, { currentPage })

    case UUID_ADD:
      const { uuids } = action
      const oldList = state.uuids || []

      return Object.assign({}, state, { uuids: oldList.concat(uuids) })

    case UUID_DELETE:
      const { index } = action

      const result = state.uuids
        .slice(0, index)
        .concat(state.uuids.slice(index + 1))

      return Object.assign({}, state, { uuids: result })
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
