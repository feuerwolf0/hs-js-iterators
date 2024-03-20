export default class Team {
    constructor() {
        this.chars = new Array();
    }
    [Symbol.iterator]() {
        let index = -1;
        let chars = this.chars;
        return {
            next() {
                if (chars[index + 1] === undefined) {
                    return {
                        done: true,
                        value: chars[index],
                    };
                }
                index++;
                return {
                    done: false,
                    value: chars[index],
                };
            },
        };
    }
}