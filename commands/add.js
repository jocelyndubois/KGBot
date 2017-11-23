const Command = require('./command');

module.exports = class Add extends Command {

    static match(message) {
        return message.content.startsWith('!add ');
    }

    static action(message) {
        message.delete();
        let indice = message.content.substring(5);
        var fs = require('fs');
        let that = this;
        let indiceNumber = this.countRows();
        var textMessage = '';
        if (indiceNumber == 1) {
            textMessage = 'Indices de `' + message.author.username + '` :\n```\n';
        } else if (indiceNumber > 1) {
            indiceNumber = indiceNumber - 2;
        }
        textMessage += indiceNumber + '/ ' + indice + '\n';
        fs.appendFile(that.filename,  textMessage, function (err) {
            that.displayIndices(message);
        });
    }
};
