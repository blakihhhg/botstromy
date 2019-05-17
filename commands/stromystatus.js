var Discord = require('discord.js');
var request = require('request');

exports.run = (client, message, args) => {

var request = require('request');
var mcCommand = '/minecraft'; // Command for triggering
var mcIP = `${args.join(" ")}`; // Your MC server IP
var mcPort = 25565; // Your MC server port

        var url = 'http://mcapi.us/server/status?ip=' + mcIP + '&port=' + mcPort;
        request(url, function(err, response, body) {
            if(err) {
                console.log(err);
                return message.reply('Error getting Minecraft server status...');
            }
            body = JSON.parse(body);
            var status = `\`${args.join(" ")}\``;
            if(body.online) {
                status = `\`${args.join(" ")}\``;
                if(body.players.now) {
                    status - '**' + body.players.now + '** people are playing!';
                } else {
                    status - '*Nobody is playing!*';
                }
            }

           let embed = new Discord.RichEmbed()
           .setDescription(`Scanning Minecraft Server`)
           .setColor("RANDOM")
           .setFooter(`Published By ${message.author.tag}`, message.author.displayAvatarURL)
           .addField("**IP:**", `StromySMP.anjay.id`)
           .addField("**Port:**", `25565`)
           .addField("**Players:**", `Coming Soon`, true)
           .addField("**Version:**", `1.13.2`, true)
           .addField("**Status:**", `Offline`, true)
           .setImage(`http://status.mclive.eu/MCServer/${mcIP}/25565/banner.png`);
            message.channel.send(embed);
        });
}

exports.conf = {
    aliases: ['mcserver'],
  name: "mcserver",
  description: "Untuk Info Minecraft Server Status",
  usage: "mcserver [IP]",
    cooldown: "5"
}