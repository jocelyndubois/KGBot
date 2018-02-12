const Command = require('./command');

module.exports = class Remove extends Command {

    static match(message) {
        return message.content.startsWith('!remove');
    }

    static action(message) {
        message.delete();
        var fs = require('fs');
        let that = this;
        fs.readFile(that.filename, 'utf8', function(err, data)
        {
            if (err)
            {
                console.log(err);
                // check and handle err
            }
            if (data)
            {
                let lines = data.split('\n')
                if (lines.length > 2)
                {
                    lines.splice(lines.length - 2)
                    lines = lines.join('\n');
                    lines += '\n';
                    fs.writeFile(that.filename, lines);
                    message.channel.send('Le dernier indice à été supprimé.');
                }
            }
        });
    }
};
