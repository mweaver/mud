class Parser {
    constructor() {}

    static parse(string) {
        let regexPattern = new RegExp(/\w/i);
        let splitStrings = string.split(/\s/i);

        console.log(splitStrings);

        let tokens = splitStrings.map(string => {

            let tokenType = regexPattern.test(string) ? 'command' : 'text';

            return {
                type: tokenType,
                text: string
            }
        });

        console.log(tokens);

        return tokens;
    }

}

module.exports = Parser;