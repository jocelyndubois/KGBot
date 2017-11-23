const Command = require('./command');

module.exports = class List extends Command {

    static match(message) {
        return message.content.startsWith('!list');
    }

    static action(message) {
        var fs = require('fs');
        this.displayIndices(message);
    }
};
