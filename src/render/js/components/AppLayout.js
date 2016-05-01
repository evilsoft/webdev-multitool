import m from 'mithril'

import { connect } from '../store'

import SidebarNavs  from './SidebarNavs'
import GenerateUUID from './GenerateUUID'

function view(ctrl, attrs) {
  return (
    <div>
      <div className="sidebar" data-region="sidebar">
        <h2 className="sidebar__header">WebDev-Multitool</h2>
        <SidebarNavs { ...attrs } />
      </div>
      <GenerateUUID {...attrs } />
    </div>
  )
}

const AppLayout = connect({ view })

export default AppLayout
