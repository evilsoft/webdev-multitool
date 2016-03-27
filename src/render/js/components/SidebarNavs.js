import m      from 'mithril'

import { navigate } from '../actions'

import bindAction from '../../lib/bindAction'
import compose    from '../../lib/compose'

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

function view(ctrl, attrs) {
  const { page, dispatch } = attrs

  const isSelected = page => a => a === page

  const dispatchAction = compose(bindAction(dispatch), navigate)
  const nav = a => () => dispatchAction(a)

  return (
    <ul>
      {buildNavs(baseNavs, nav, isSelected(page))}
    </ul>
  )
}

const SidebarNavs = { view }

export default SidebarNavs
