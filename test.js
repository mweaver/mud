import test from 'ava';
let Parser = require('./parser/parser.js');

test('Parser exists', t => {

    let parser = new Parser();

    t.pass();

});

test('Parser creates basic token from single word, non-spaced', t => {

    let token = Parser.parse('hello');

    t.is('hello', token[0].text);

});


test('Parser creates basic tokens from two words separated by a space', t => {

    let tokens = Parser.parse('hello world');

    t.is('hello', tokens[0].text);
    t.is('world', tokens[1].text);

});
