const { to } = require('await-to-js')
const pe = require('parse-error')

module.exports.to = async (promise) => {
    const [err, res] = await to(promise)
    if (err) return [pe(err)]

    return [null, res]
}

module.exports.ReE = (res, err, code) => { // Error Web Response
    if (typeof err === 'object' && typeof err.message !== 'undefined') {
        err = err.message
    }

    if (typeof code !== 'undefined') res.statusCode = code

    return res.json({ success: false, error: err })
}

module.exports.ReS = (res, data, code) => { // Success Web Response
    let send_data = { success: true }

    if (typeof data === 'object') {
        send_data = Object.assign(data, send_data)// merge the objects
    }

    if (typeof code !== 'undefined') res.statusCode = code

    return res.json(send_data)
}

module.exports.TE = function (err_message, log) { // TE stands for Throw Error
    if (log === true) {
        console.error(err_message)
    }

    throw new Error(err_message)
}
