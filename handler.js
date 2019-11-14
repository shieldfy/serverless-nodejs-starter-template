
const hello = require('./lib/hello');
const response = require('./lib/response');

const helloFn = async (event) => {
   
    let body = event.body ? JSON.parse(event.body) : event; //api gateway (event.body) vs invoke (event)
    
    let result = hello(body);
    
    return response(result);
}

module.exports.hello = helloFn
