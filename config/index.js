const development = require('./development');
const production = require('./production');

module.exports = function (env) {
    if (env === 'development') {
        return development;
    } else if (env === 'production') {
        return production;
    } else return development
}
