import m from 'mithril'

const baseNavs = [
  { action: 'encode', label: 'Encode/Decode' },
  { action: 'generate', label: 'Generate' },
  { action: 'format', label: 'Format' },
  { action: 'color', label: 'Color' },
  { action: 'web', label: 'Web Requests' }
]

function buildNavs(navs, navigate, isSelected) {
  return navs.map((nav) => {
    let classes = [ 'sidebar__item' ]

    if(isSelected(nav.action)) {
      classes = classes.concat('sidebar__item--selected')
    }

    return (
      <li className={classes.join(' ')} onclick={navigate(nav.action)}>
        {nav.label}
      </li>
    )
  })
}

function controller(attrs) {
  return attrs
}

function view(ctrl) {
  const { navigate, isSelected } = ctrl
  const nav = action => () => navigate(action)
  return (
    <ul>
      {buildNavs(baseNavs, nav, isSelected)}
    </ul>
  )
}

const SidebarNavs = { controller, view }

export default SidebarNavs
