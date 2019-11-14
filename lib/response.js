module.exports = (message) => {
    
    //let body = message; //default;
    
    let body =  JSON.stringify(  message , null, 2 )

    return {
        statusCode: 200,
        body
    }
}