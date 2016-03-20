import store from './store'

const { dispatch } = store

const NAVIGATE = 'NAVIGATE'

export function navigate(page) {
  return dispatch({
    type: 'NAVIGATE',
    page
  })
}
