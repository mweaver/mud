class Parser {
    constructor() {}

    static parse(string) {
        let regexPattern = new RegExp(/\w/i);

        if (regexPattern.test(string)) {
            return {
                text: string
            }
        }

        return null;

    }
    
}

module.exports = Parser;