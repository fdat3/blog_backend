const morgan = require('morgan')

morgan('dev', (tokens, req, res) => {
    console.log('morgan dev')
    const result =  [
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, 'content-length'), '-',
        tokens['response-time'](req, res), 'ms'
    ].join(' ')

    console.log(result)

    return result
})

morgan('combined', (tokens, req, res) => {
    console.log('morgan combined')
    const result =  [
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, 'content-length'), '-',
        tokens['response-time'](req, res), 'ms'
    ].join(' ')

    console.log(result)

    return result
})

const logMiddleware = {
    morgan,
}

module.exports = logMiddleware