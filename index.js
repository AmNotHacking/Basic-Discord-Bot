const Discord = require('discord.js');
const client = new Discord.Client();
let tickets = [];

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.channel.id === "728021403734900770") {
    if (msg.content.toLowerCase() === "!agree") {
        if (msg.member.roles.cache.find(r => r.name === "728026728617738261")) {
            msg.reply("You already have this role.");
            setTimeout(() => { 
                msg.delete(); 
            }, 3000);
        } else {
            var role = msg.guild.roles.cache.find(role => role.id === "728026728617738261");
            msg.member.roles.add(role);
            msg.reply("role assigned.");
            setTimeout(() => { 
                msg.delete(); 
            }, 3000);
        }
    }  else {
        if (msg.author.bot) {
            console.log("bot"); 
            setTimeout(() => { 
                msg.delete(); 
            }, 3000);
        } else {
            msg.reply("𝕺𝖓𝖑𝖞 𝖈𝖔𝖒𝖒𝖆𝖓𝖉𝖘 𝖆𝖑𝖑𝖔𝖜𝖊𝖉 𝖍𝖊𝖗𝖊");
            msg.delete()
        }
    } 
  }
  if (msg.channel.id === "728039976134246412") {
    if (msg.content.toLowerCase() === "!purchase") {
        msg.delete();
        msg.reply(exampleEmbed);
    } else if (msg.content.toLowerCase() != "!ticket" && msg.author.bot) {
        setTimeout(() => { 
            msg.delete(); 
        }, 60000);
    } 
    if (!msg.author.bot) {
            msg.delete();
    }
  }
  if (msg.channel.id === "728046293825355867") {
    if (msg.content.toLowerCase() === "!ticket") {
        if (!tickets.includes(msg.member.user.id)) {
            msg.member.guild.channels.cache.find(channel => channel.name === "tickets").send(`${msg.author.tag} submitted a ticket.`);
            var name = msg.author.username;
            msg.guild.channels.create(name, msg.member.user.name);
            tickets.push(name.replace(/ /g, "-"));
            msg.reply("your ticket has been created.");
            setTimeout(() => { 
                msg.delete(); 
            }, 3000);
        } else {
            msg.reply("You\'ve already created a ticket.");
        }
    } else {
        setTimeout(() => { 
            msg.delete(); 
        }, 3000);
      }
  }
  if (msg.channel.id === "728043487274205266") {
    if (msg.content.toLowerCase() === "!firstticket") {
        msg.reply(tickets[tickets.length - 1]);
    }
    if (msg.content.toLowerCase() === "!alltickets") {
        msg.reply(tickets);
    }
    if (msg.content.toLowerCase() === "!closeticket") {
            console.log(tickets[tickets.length - 1])
            const fetchedChannel = msg.guild.channels.cache.find(channel => channel.name === tickets[tickets.length - 1].toLowerCase())
            fetchedChannel.delete()
            msg.reply(`ticket ${tickets[tickets.length - 1]} has been fufilled`);
            tickets.pop();
    }
  }
});

const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle(':money_with_wings: Purchase Information :money_with_wings:')
	.setAuthor('Farming Services', 'https://imgur.com/lgMjo1U.png')
	.addFields(
		{ name: 'Jailbreak', value: '$0.75/50k \n 150 R$/50k', inline: true },
        { name: 'Anomic', value: '$0.30/10k \n 60 R$/10k', inline: true },
        { name: 'SkyBlock', value: '20 R$/100k \n LOW STOCK!', inline: true },
        { name: 'BloxBurg', value: '$2/100k \n 350 R$/100k', inline: true },
        { name: 'Build a boat for treasure', value: '$0.50/1k \n 100 R$/1k', inline: true },
        { name: 'Da Hood', value: '$2/100k \n 300 R$/100k', inline: true }
	)
	.addField('Any other game :', 'Negotiatable', false)
	.setImage('https://imgur.com/Ufo8J50.png')
	.setTimestamp()
	.setFooter('© Farming Services Ltd.', 'https://imgur.com/lgMjo1U.png');

client.login("-------------------");