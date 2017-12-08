import test from 'ava';

let Player = require('./../parser/Player.js');

test('Player has user name', t => {

    let player = new Player();

    t.is(player.userName, 'Test User');

});

test('Player has characters', t => {

    let player = new Player();

    t.truthy(player.characters[0]);

});
