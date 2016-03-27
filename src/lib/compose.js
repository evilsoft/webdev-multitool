export default function compose(...funcs) {
  return function(data) {
    return funcs.reduceRight((memo, func) => {
      return func(memo)
    }, data)
  }
}
