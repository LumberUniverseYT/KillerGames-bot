const Discord = require("discord.js");

const TOKEN = "Mzc2NDA1ODk3ODAwNDUwMDQ4.DN962w.0c3Uktf7vanKLELc01NV0dQQIKU";
const PREFIX = ";";

var bot = new Discord.Client();

var fortunes = [
    "Yes",
    "No",
    "Maybe",
];

bot.on("ready", function() {
    console.log("Ready");
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

bot.user.setGame(";help");

switch (args[0].toLowerCase()) {
    case "help":
    var embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField(";Game", "Gives you the link to my game", true)
    .addField(";help", "Shows a list of commands", true)
    .addField(";kill username", "Kills a Person with Killer Power", true)
    .addField(";saymessage", "Makes the bot say What you type after the command", true)
    .addField(";ping", "Replys with Pong", true)
    .addField(";embed", "Embeds a message", true)
    .setFooter("KillerGames | Bot")
    .setThumbnail(message.author.avatarURL)
    message.channel.sendEmbed(embed);
    break;
    case "info":
        message.channel.sendMessage("I'm a bot to help out Killer Games Fans");
        break;
    case "ping":
    message.channel.sendMessage("Pong!");
        break;
    case "owner":
        message.channel.sendMessage("the owner is LumberUniverseYT#0437");
        break;
    case "saymessage":
        message.channel.sendMessage(message.content.substring(11));
        break;
    case "embed":
        var embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(message.content.substring(11))
        message.channel.sendEmbed(embed);
        break;
    case "invite":
        var embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("https://discordapp.com/oauth2/authorize?client_id=376405897800450048&scope=bot&permissions=0")
        message.channel.sendEmbed(embed);
        break;
    default:
        message.channel.sendMessage("The Command you have executed is Invalid");
        
    }
});

bot.login(TOKEN);
