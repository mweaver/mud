import test from 'ava';
let Parser = require('./parser/Parser.js');
let Player = require('./parser/Player.js');

test('Parser exists', t => {

    let parser = new Parser();

    t.pass();

});

test('Parser creates basic token from single word, non-spaced', t => {

    let token = Parser.parse('hello');

    t.is(token[0].text, 'hello');

});


test('Parser creates basic tokens from two words separated by a space', t => {

    let tokens = Parser.parse('hello world');

    t.is(tokens[0].text, 'hello');
    t.is(tokens[1].text, 'world');

});

test('Player has user name', t => {

    let player = new Player();

    t.is(player.userName, 'Test User');

});