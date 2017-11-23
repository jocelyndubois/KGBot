const Discord = require('discord.js');
const bot = new Discord.Client();
const Add = require('./commands/add');
const Remove = require('./commands/remove');
const List = require('./commands/list');
const Reset = require('./commands/reset');
const Help = require('./commands/help');

bot.on('ready', function(message) {
   bot.user.setGame('Khushas Game');
});

bot.on('message', function(message) {
   let commandUsed = Add.parse(message) || Reset.parse(message) || List.parse(message) || Remove.parse(message) || Help.parse(message);
});

/**********************************************************************
 *                   NEVER COMMIT THIS KEY !!                         *
 *********************************************************************/
bot.login('INSERT YOUR TOKEN HERE');
