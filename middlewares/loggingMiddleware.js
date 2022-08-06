const morgan = require('morgan');
const os = require('os');
const {logService} = require('../service');
//
// morgan.token('conversation-id', function getConversationId(req) {
//     return req.conversationId;
// });
morgan.token('session-id', function getSessionId(req) {
    return req.sessionId;
});
// morgan.token('instance-id', function getInstanceId(req) {
//     return req.instanceId;
// });
morgan.token('hostname', function getHostname() {
    return os.hostname();
});
morgan.token('pid', function getPid() {
    return process.pid;
});

async function jsonFormat(tokens, req, res) {
    console.log(req)
    const result = {
        'remote-address': tokens['remote-addr'](req, res),
        'time': tokens['date'](req, res, 'iso'),
        'method': tokens['method'](req, res),
        'url': tokens['url'](req, res),
        'http-version': tokens['http-version'](req, res),
        'status-code': tokens['status'](req, res),
        'content-length': tokens['res'](req, res, 'content-length'),
        'referrer': tokens['referrer'](req, res),
        'user-agent': tokens['user-agent'](req, res),
        'session-id': tokens['session-id'](req, res),
        'hostname': tokens['hostname'](req, res),

        // 'instance': tokens['instance-id'](req, res),
        'pid': tokens['pid'](req, res),
        // 'error': err ? err?.message ? err.message : err : null,
        'original_url': req.originalUrl,
    }

    console.log(`${result['time']} ${result['hostname']} ${result['pid']} ${result['method']} ${result['url']} ${result['status-code']}`)

    if (result['status-code'] >= 400) {
        setTimeout(() => {
            logService.create(result);
        }, 1);
    }

    return JSON.stringify(result);
}

module.exports = function loggingMiddleware() {
    return morgan(jsonFormat);
};

