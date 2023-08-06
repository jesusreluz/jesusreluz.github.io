const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js');
const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;

const client = new Client({
    intents: [Guilds, GuildMembers, GuildMessages],
    partials: [User, Message, GuildMember, ThreadMember]
});

const { loadEvents } = require('./Handlers/eventHandler');

const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.sendFile('htpps://portfolio.incognity.work/projects/potutp/index.html')
});

app.listen(port, ()=> {
    console.log('Bot Encendido');
});

client.config = require('./config.json');
client.events = new Collection();
client.commands = new Collection();

loadEvents(client);

client.login(client.config.token);