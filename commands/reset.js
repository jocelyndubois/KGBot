const Command = require('./command');

module.exports = class Reset extends Command {

    static match(message) {
        return message.content.startsWith('!reset');
    }

    static action(message) {
        var fs = require('fs');
        let that = this;
        fs.readFile(that.filename, 'utf8', function(err, data)
        {
            if (err)
            {
                console.log(err);
            }
            fs.writeFile(that.filename, '');

            message.channel.send('Bravo ! Les indices sont remis à zéro, au suivant !');
        });
    }
};
