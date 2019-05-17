const Discord = require("discord.js");
const client = new Discord.Client({
  fetchAllMembers: true,
disabledEvents: ["TYPING_START", "USER_NOTE_UPDATE"],
disableEveryone: true 
});
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async (client, message, args) => {
let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(`${client.user.displayAvatarURL}`)
    .addField("Stromy Bot info", `**Creation Date**: ${moment.utc(client.user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}\n**ID**: ${message.client.user.id}\n**Developer Bot**: xFuki#2551\n**Version**: 4.1\n**Default Prefixes**: Use **=**\n**Costum Prefix**: Please Mention Me! @StromyBot`)
    message.channel.send(embed);
}