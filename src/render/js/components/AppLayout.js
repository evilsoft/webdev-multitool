import m from 'mithril'

import { connect } from 'store'

import GenerateUuid from './GenerateUuid'

function view(ctrl, attrs) {
  return (
    <div>
      <GenerateUuid {...attrs } />
    </div>
  )
}

const AppLayout = connect({ view })

export default AppLayout
