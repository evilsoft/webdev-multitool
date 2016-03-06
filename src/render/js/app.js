import m, { mount } from 'mithril'

import AppLayout from './components/AppLayout'
import appState from './appState'

function navigate(action) {
  appState.selected(action)
}

const isSelected = action => appState.selected() === action

export function start(options={}) {
  const { target } = options
  const api = { navigate, isSelected }

  mount(target, <AppLayout { ...api } />)
}
