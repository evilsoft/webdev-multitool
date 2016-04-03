import m        from 'mithril'
import compose  from 'ramda/src/compose'

import { navigate } from '../actions'

import concatIf from '../../../lib/concatIf'

function controller(attrs) {
  const { page, dispatch } = attrs

  const navigateTo = () => compose(dispatch, navigate)(page)
  const isSelected = current => current === page

  return { isSelected, navigateTo }
}

function view(ctrl, attrs) {
  const { currentPage, label } = attrs
  const { isSelected, navigateTo } = ctrl

  const selected  = concatIf('sidebar__item--selected', isSelected(currentPage))
  const classes   = selected([ 'sidebar__item' ]).join(' ')

  return (
    <li className={classes} onclick={navigateTo}>
      {label}
    </li>
  )
}

const SidebarNav = { controller, view }

export default SidebarNav
