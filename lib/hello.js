module.exports = (body) => {
    let name = body.name || 'unknown';
    return "Hello " + name + " :)";
}