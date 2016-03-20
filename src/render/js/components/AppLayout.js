import m from 'mithril'

import SidebarNavs from './SidebarNavs'

function view(ctrl, attrs) {
  return (
    <div>
      <div className="sidebar" data-region="sidebar">
        <h2 className="sidebar__header">WebDev-Multitool</h2>
        <SidebarNavs { ...attrs } />
      </div>
      <div data-region="workspace"></div>
    </div>
  )
}

const AppLayout = { view }

export default AppLayout
