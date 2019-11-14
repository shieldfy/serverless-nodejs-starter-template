const hello = require('../lib/hello');

test('hello test', () => {
    let res = hello({name: "test"});
    expect(res).toBe("Hello test :)");
});