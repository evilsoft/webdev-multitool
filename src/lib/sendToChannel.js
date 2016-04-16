import curry from 'ramda/src/curry'

const _sendToChannel  = (target, channel, data) => target.send(channel, data)
const sendToChannel   = curry(_sendToChannel)

export default sendToChannel
