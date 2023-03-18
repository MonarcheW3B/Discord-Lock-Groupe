const Discord = require('discord.js-selfbot-v13');
const request = require('request');
const client = new Discord.Client();

client.on('ready', async () => {
    console.log(`Connecté ${client.user.tag}`)
})

var addUser = 'ID HERE'

client.on('messageCreate', async message => {
    if (message.content === '.lock') {
        message.edit('**:lock: __Groupe lock__**')
        setInterval(async () => {
            request(`https://discord.com/api/v9/channels/${message.channel.id}/recipients/${addUser}`, {
                "headers": {
                    "accept": "*/*",
                    "authorization": `${client.token}`,
                },
                "method": "PUT",
            }, (err, response, body) => {
            });
        }, 350);
    }
})

client.login('TOKEN HERE')
