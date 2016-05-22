import { curry } from '../shared/helpers'

const _concatIf = (item, pred, data) => pred ? data.concat(item) : data
const concatIf  = curry(_concatIf)

export default concatIf
