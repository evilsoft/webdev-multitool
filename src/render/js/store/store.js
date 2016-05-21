import m from 'mithril'

import { createStore, applyMiddleware } from 'redux'

import {
  UUID_ADD,
  UUID_DELETE,
  UUID_CLEAR
} from 'actions/uuid'

function redraw() {
  return (next) => (action) => {
    m.startComputation()
    const result = next(action)
    m.endComputation()
    return result
  }
}

function reducer(state={}, action) {
  const { index } = action

  switch(action.type) {
    case UUID_ADD:
      const { uuids } = action
      const oldList = state.uuids || []

      return Object.assign({}, state, { uuids: oldList.concat(uuids) })

    case UUID_DELETE:
      const result = state.uuids
        .slice(0, index)
        .concat(state.uuids.slice(index + 1))

      return Object.assign({}, state, { uuids: result })

    case UUID_CLEAR:
      return Object.assign({}, state, { uuids: [] })
  }
  return state
}

const store = createStore(reducer, {}, applyMiddleware(redraw))

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
