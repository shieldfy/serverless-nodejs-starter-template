
const hello = require('./lib/hello');
const response = require('lib/response');

const helloFn = async event => {
    let body = event.body || event;

    let result = hello(body);
    
    response(result);
}

module.exports.hello = helloFn
