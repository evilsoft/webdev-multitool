export default function actionDispatch(action) {
  return (dispatch, data) => () => dispatch(action(data))
}
