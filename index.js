const Discord = require('discord.js');
const nodemon = require('nodemon');
const chalk = require('chalk');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const fs = require('fs');


client.commands = new Discord.Collection();

client.on('guildMemberAdd', guildMember =>{
  const channel = guildMember.guild.channels.cache.get('847120549629263973');

  const embed = new Discord.MessageEmbed()
  .setColor('#B5BFFF')
  .setTitle("Dołączył do nas nowy Szmul!")
  .setDescription(`<@${guildMember.user.id}> dołączył na serwer!\n`
      + `Jest nas teraz **${client.guilds.cache.get('834494740748566539').memberCount}**`);
      
  channel.send(embed);
})


client.on('guildMemberRemove', guildMember =>{
  const channel = guildMember.guild.channels.cache.get('847120549629263973');

  const embed = new Discord.MessageEmbed()
  .setColor('#B5BFFF')
  .setTitle("Szmul opuścił serwer!")
  .setDescription(`<@${guildMember.user.id}> opuścił serwer!\n`
      + `Jest nas teraz **${client.guilds.cache.get('834494740748566539').memberCount}**`);
      
  channel.send(embed);
})


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('Poleceń sxcq!' ,{type: `LISTENING`})
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.on('message', message => {
    if (message.content === 'v!pytanie') {
      const embed = new MessageEmbed()
        .setTitle('Pytanie dnia')
        .setColor("BLUE")
        .setDescription('**Czy Lukasz ma małego? **')
        .setFooter(`${message.author.tag}`)
        .setTimestamp();
      message.channel.send(embed);
    }
  });
  

client.login('ODMwMDA2NjAyNDYyOTIwNzA0.YHAZ4g.tNd8ByLTJlW02Id3GDK7bU8aqp8')