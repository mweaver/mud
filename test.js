import test from 'ava';
let Parser = require('./parser/parser.js');

test('foo', t => {
    t.pass();
});

test('bar', async t => {
    const bar = Promise.resolve('bar');

    t.is(await bar, 'bar');
});

test('Parser exists', t => {

    let parser = new Parser();

    t.pass();

});

test('Parser creates basic token from single word, non-spaced', t => {

    let parser = new Parser();

    let token = Parser.parse('hello');

    t.is(token, {text: "hello"});

});