# serverless-nodejs-starter-template
A boilerplate for new Serverless Nodejs projects with tests and basic configurations


## Description
Simple hello function take name and return with hello


``` javascript
const hello = require('./lib/hello');
const response = require('./lib/response');

const helloFn = async (event) => {
   
    let body = event.body ? JSON.parse(event.body) : event; //api gateway (event.body) vs invoke (event)
    
    let result = hello(body);
    
    return response(result);
}

module.exports.hello = helloFn
```

## features
* Ready to use default configuration for serverless framework
* Environment variables ready with develop, staging and production
* Works with both invoke and api
* Serverless offline to test the api gateway localy

## Installation

* Install & Configure serverless framework, Guide [here](https://serverless.com/framework/docs/getting-started/)

* Clone this repo and run `npm install` then `npm run config`


## Test locally

* `npm run local` will run the function directly without serverless framework for fast test on your local machine
* `npm run invoke` will invoke the function locally and pass the data in `test-data.json` to your function as body
* `npm run api` will run api gateway locally in your machine on port `3000` so you can test the function as it on AWS api gateway

## Deploy
* `npm run deploy` will deploy on production and load your .env.production environment variables
* `npm run deploy-develop` will deploy on develop and load your .env.production environment variables
* `npm run deploy-staging` will deploy on staging and load your .env.production environment variables



## Contribution

Feel free to fork, commit and submit pull request if you find a bug, or you want to add support to a new environment. Contributions are very welcome.

## License

MIT


