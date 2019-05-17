const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
let avatar = client.user.displayAvatarURL
let tutorial = new Discord.RichEmbed()
.setAuthor(`Stromy Offical Help`)
.setThumbnail(client.user.displayAvatarURL)
.addField("―――――― :headphones: Music :headphones: ――――――", '`>play, >stop, >pause, >skip, \n>np, >volume, >pause, >join, \n>resume, >stop, >leave, >queue`')
.addField("―――――― :symbols: Utils :symbols: ――――――", '`>ascii, >avatar, >autonick, >autonick off,\n >autonick on, >autonick previous, >ping, \n>coins, >level`')
.addField("―――――― :satellite: Core :satellite: ――――――", '`>help, >info, >afk, >bugreport,\n >stats, >invite, >prefix, >info`')
.addField("―――――― :underage: Nsfw :underage: ――――――", '`>nsfw, >hentai, >ass, >boobs,\n >neko,`')
.addField("―――――― :bomb: Fun :bomb: ――――――", '`>joke, >meme, >8ball, >dog, \n>cat, >pig, >chameleon, >quiz, \n>anime, >animemes, >get, >flip,\n >gif, >emoji, >bunny`')
.addField("―――――― :tools: Dev :tools: ――――――", '`>reload, >restart, >eval`')
.addField("―――――― :wrench: Mod :wrench: ――――――", '`>ban, >mute, >kick, >mute,\n >purge, >warn, >say, >saybd, \n>dm, >welcome`')
.addField("―――――― :bookmark: Info :bookmark: ――――――", '`>stats, >serverinfo, >profile, >online `')
.addField("―――――― :desert: Picture :desert: ――――――", '`>cat, >dog, >panda, >chameleon, >photograph,\n >pig, >bunny, >hug, >slap `')
message.channel.send(tutorial).then(msg => msg.react('😊').then(msg => msg.react('😊')).then(msg => msg.react('😊')).then(msg => msg.react('😊')))
}
