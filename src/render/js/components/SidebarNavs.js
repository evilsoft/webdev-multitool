import m      from 'mithril'

import { navigate } from '../actions'
import { navs } from '../constants'

import compose from '../../lib/compose'

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

  const dispatchAction = compose(dispatch, navigate)
  const nav = a => () => dispatchAction(a)

  return (
    <ul>
      {buildNavs(navs, nav, isSelected(page))}
    </ul>
  )
}

const SidebarNavs = { view }

export default SidebarNavs
