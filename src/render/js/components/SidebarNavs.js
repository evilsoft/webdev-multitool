import m      from 'mithril'
import store  from '../store'

import { navigate } from '../actions'

const { getState } = store

const baseNavs = [
  { page: 'encode', label: 'Encode/Decode' },
  { page: 'generate', label: 'Generate' },
  { page: 'format', label: 'Format' },
  { page: 'color', label: 'Color' },
  { page: 'web', label: 'Web Requests' }
]

function buildNavs(navs, navigate, isSelected) {
  return navs.map((nav) => {
    let classes = [ 'sidebar__item' ]

    if(isSelected(nav.page)) {
      classes = classes.concat('sidebar__item--selected')
    }

    return (
      <li className={classes.join(' ')} onclick={navigate(nav.page)}>
        {nav.label}
      </li>
    )
  })
}

function controller(attrs) {
  const isSelected = a => a === getState().page
  const nav = a => () => navigate(a)

  return {
    isSelected,
    nav
  }
}

function view(ctrl) {
  const { nav, isSelected } = ctrl
  return (
    <ul>
      {buildNavs(baseNavs, nav, isSelected)}
    </ul>
  )
}

const SidebarNavs = { controller, view }

export default SidebarNavs
