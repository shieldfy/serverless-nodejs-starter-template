require('dotenv').config();

const handler = require('./handler');

( async() => {

    let result = await handler.hello({
        body: {
            name: "cli"
        }
    }); 
    console.log(result);
} ) ()
