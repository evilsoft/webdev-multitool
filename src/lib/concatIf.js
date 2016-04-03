import curry from 'ramda/src/curry'

const _concatIf = (item, pred, data) => pred ? data.concat(item) : data
const concatIf  = curry(_concatIf)

export default concatIf
