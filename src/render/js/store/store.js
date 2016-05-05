import m from 'mithril'

import { createStore } from 'redux'

import {
  UUID_ADD,
  UUID_DELETE,
  UUID_MARK_USED
} from 'actions/uuid'

import lensIndex  from 'ramda/src/lensIndex'
import lensProp   from 'ramda/src/lensProp'
import over       from 'ramda/src/over'
import assoc      from 'ramda/src/assoc'
import compose    from 'ramda/src/compose'

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

    case UUID_MARK_USED:
      const itemLens = compose(lensProp('uuids'), lensIndex(index))
      return over(itemLens, assoc('used', true), state)
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
