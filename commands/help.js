const Command = require('./command');

module.exports = class Help extends Command {

    static match(message) {
        return message.content.startsWith('!help');
    }

    static action(message) {
        message.channel.send('```\n' +
            '!add Je met mon indice ici => Ajoute un indice et affiche la liste\n' +
            '!reset => vide la liste des indices\n' +
            '!list => Affiche la liste des indices\n' +
            '!remove => supprime le dernier indice (au cas ou on sait jamais)\n' +
            '```');
    }
};
