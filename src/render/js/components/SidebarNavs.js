import m from 'mithril'

import { navs } from '../constants'

import SidebarNav from './SidebarNav'

function view(ctrl, attrs) {
  return (
    <ul>{navs.map(item => <SidebarNav {...item} {...attrs} />)}</ul>
  )
}

const SidebarNavs = { view }

export default SidebarNavs
