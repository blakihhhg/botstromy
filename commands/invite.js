const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let embed = new Discord.RichEmbed()
    .setTitle('want to invite this bot to your server? :robot:')
    .addField('Link','[Click Here](https://discordapp.com/api/oauth2/authorize?client_id=571171087186919435&permissions=0&scope=bot)', true)
    .setColor("#ec0000")
    .setFooter('© Release | By: @Chqnax#2551 | 2019')
    message.channel.send(embed)
}