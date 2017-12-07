let Character = require('./Character.js');

class Player {

    constructor() {
        this.userName = 'Test User';
        this.characters = [new Character()];
    }

}

module.exports = Player;