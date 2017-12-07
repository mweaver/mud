class Parser {

    constructor() {}

    static parse(string) {
        let regexPattern = new RegExp(/\w/i);
        let splitStrings = string.split(/\s/i);

        return splitStrings.map(string => {

            let tokenType = regexPattern.test(string) ? 'command' : 'text';

            return {
                type: tokenType,
                text: string
            }
        });
    }

}

module.exports = Parser;