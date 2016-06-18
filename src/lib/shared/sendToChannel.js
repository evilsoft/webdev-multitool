import { curry } from '../shared/helpers'

const _sendToChannel  = (target, channel, data) => target.send(channel, data)
const sendToChannel   = curry(_sendToChannel)

export default sendToChannel
