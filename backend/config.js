var path = require('path');

module.exports = {
    LOG_LEVEL: 'debug',
    PORT: 8000,

    DB_PATH: 'masyanya',
    DB_USERNAME: 'dev_masyanya',
    DB_PASSWORD: 'dev12345',

    JS_PATH: path.resolve('static/js/index.js'),
    BEMHTML_PATH: path.resolve('static/js/index.bemhtml.js'),
    BEMJSON_PATH: path.resolve('static/js/index.bemjson.js')
}
