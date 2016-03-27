export default function compose(...funcs) {
  return function(data) {
    return funcs.reverse().reduce((memo, func) => {
      return func(memo)
    }, data)
  }
}
