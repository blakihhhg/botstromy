const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async(bot, message, args) => {

    message.delete()
    let {body} = await superagent
    .get(`https://cdn.discordapp.com/attachments/469543587344809984/499887002532184085/Disco_sheep_by_lockrikard-d6xo4oa.gif`);

    let discoEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("DiscoSheep.")
    .setImage(`https://cdn.discordapp.com/attachments/469543587344809984/499887002532184085/Disco_sheep_by_lockrikard-d6xo4oa.gif`)
    .setColor("RANDOM")
    .setFooter("Bot Version: 0.0.3");

    message.channel.send(discoEmbed);

}

module.exports.help = {
    name: "DiscoSheep"
}