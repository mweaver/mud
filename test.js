import test from 'ava';
let Parser = require('./parser/parser.js');
let Lexer = require('./parser/lexer.js');

test('foo', t => {
    t.pass();
});

test('bar', async t => {
    const bar = Promise.resolve('bar');

    t.is(await bar, 'bar');
});

test('parser', t => {

    let parser = new Parser();

    t.pass();

});

test('parser 2', t => {

    let parser = new Parser();


    t.truthy(parser.parse);

});

test('lexer', t => {

    let lexer = new Lexer();

    t.truthy(lexer.lex);

});