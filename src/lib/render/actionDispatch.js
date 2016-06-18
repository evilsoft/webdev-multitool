import { curry, compose } from '../shared/helpers'

const actionDispatch = curry(
  (action, dispatch, data) => compose(dispatch, action)(data)
)

export default actionDispatch
