module.exports = class Command {

    static parse (message) {
        this.guildId = message.channel.guild.id;
        this.filename = this.guildId + '-indices';
        if (this.match(message)) {
            this.action(message);
            return true;
        }
        return false;
    }

    static match (message) {
        return false;
    }

    static countRows() {
        var fs = require('fs');
        let that = this;
        let lines = fs.readFileSync(that.filename, 'utf8');
        lines = lines.split('\n');
        return lines.length;
    }

    static displayIndices (message) {
        var fs = require('fs');
        let that = this;
        fs.readFile(that.filename, 'utf8', function (err,data) {
            if (err) {
                return console.log(err);
            }
            if (data) {
                message.channel.send(data+'```');
            } else {
                message.channel.send('Il n\'y as pas d\'indices !');
            }
        });
    }
};
