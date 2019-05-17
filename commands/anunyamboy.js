const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let embed = new Discord.RichEmbed()
    .setTitle("Anu Mboy")
    .setDescription("Dih. Kepo.")
    message.channel.send(embed).then(msg => {msg.delete(15000)});
}