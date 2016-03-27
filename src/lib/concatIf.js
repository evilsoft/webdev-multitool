const concatIf = (item, pred) => data => pred ? data.concat(item) : data

export default concatIf
