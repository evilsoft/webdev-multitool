import curry    from 'ramda/src/curry'
import compose  from 'ramda/src/compose'

const actionDispatch = curry(
  (action, dispatch, data) => () => compose(dispatch, action)(data)
)

export default actionDispatch
