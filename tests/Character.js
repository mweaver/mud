import test from 'ava';

let Character = require('./../parser/Character.js');

test('Character has a name', t => {

    let character = new Character();

    t.is(character.name, 'Booboo');

});