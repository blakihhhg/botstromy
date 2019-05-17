const { Canvas } = require("canvas-constructor");
const { resolve, join } = require("path");
const { Attachment } = require("discord.js");
const { get } = require("snekfetch"); 
const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (client, message, args) => {
let tes = args.slice(0).join(' ');
if (!tes) return null;
  if (tes.match('test')) {
  var nama = message.author.username
var jadi = nama.length > 12 ? nama.substring(0, 10) + "..." : nama;
async function createCanvas() {
var imageUrlRegex = /\?size=2048$/g;
var {body: background} = await superagent.get("http://dreamicus.com/data/yellow/yellow-04.jpg");
var {body: avatar} = await superagent.get(message.author.displayAvatarURL.replace(imageUrlRegex, "?size=128"));
var {body: botavatar} = await superagent.get("https://media.discordapp.net/attachments/556039294502830081/558984959541510144/Screenshot_1.png");
return new Canvas(856, 376)
 .addImage(avatar, 100, 50, 256, 256, 128)
 .setColor('RED')
 .setTextFont('50px System')
 .setTextAlign('center')
 .setTextFont('30px Oswald')
 .addImage(background, 0, 0, 856, 376)
 .addImage(botavatar, 0, 0, 856, 376)
 .addText("Welcome Back", 625, 105)
 .addText(`${jadi}#${message.author.discriminator}`, 625, 145)
 .addRoundImage(avatar, 135, 10, 256, 256, 128)
 .toBufferAsync();
  }
  message.channel.send(`Nama = ${message.author}\nCount = ${message.guild.memberCount}\nServer = ${message.guild.name}`, new Discord.Attachment(await createCanvas()));
  }
}