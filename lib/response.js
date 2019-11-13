module.exports = (message) => {
    
    let body = message; //default;
    if (process.env.APP_ENV !== 'local') {
        body =  JSON.stringify(  message , null, 2 )
    }
    
    return {
        statusCode: 200,
        body
    }
}