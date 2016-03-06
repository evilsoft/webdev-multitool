import m from 'mithril'

import SidebarNavs from './SidebarNavs'

function controller(attrs) {
  return attrs
}

function view(ctrl) {
  return (
    <div>
      <div className="sidebar" data-region="sidebar">
        <h2 className="sidebar__header">WebDev-Multitool</h2>
        <SidebarNavs { ...ctrl } />
      </div>
      <div data-region="workspace"></div>
    </div>
  )
}

const AppLayout = { controller, view }

export default AppLayout
