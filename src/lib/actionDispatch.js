export default function actionDispatch(action) {
  return function(dispatch, data) {
    return dispatch(action(data))
  }
}
