import _compose from 'ramda/src/compose'
import _curry   from 'ramda/src/curry'
import _prop    from 'ramda/src/prop'
import _objOf   from 'ramda/src/objOf'
import _map     from 'ramda/src/map'

export const compose  = _compose
export const curry    = _curry

export const id       = x => x
export const thunkId  = x => () => x
export const prop     = _prop
export const objOf    = _objOf

// Pointfree
export const map = _map
