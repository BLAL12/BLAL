const Discord = require('discord.js');
const client = new Discord.Client();
console.log("By al7midy");
const ownerid = '518024839953645588';

client.on("ready", () => {
let channel =     client.channels.get("527067290508722179")
setInterval(function() {
channel.send(`1`);
}, 30)
})

a.on("ready", () => {
let channel =     client.channels.get("527067290508722179")
setInterval(function() {
channel.send(`2`);
}, 30)
})

b.on("ready", () => {
let channel =     client.channels.get("527067290508722179")
setInterval(function() {
channel.send(`3`);
}, 30)
})

client.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "b") {
        		        if (message.author.id != ownerid) return;
    message.delete().catch(O_o=>{}); 

   message.channel.sendMessage(args.join("  "))
  }
});
a.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "b") {
        		        if (message.author.id != ownerid) return;
    message.delete().catch(O_o=>{}); 

   message.channel.sendMessage(args.join("  "))
  }
});
b.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "b") {
        		        if (message.author.id != ownerid) return;
    message.delete().catch(O_o=>{}); 

   message.channel.sendMessage(args.join("  "))
  }
});

client.login(process.env.BOT_TOKEN);
a.login(process.env.BOT_TOKEN1);
b.login(process.env.BOT_TOKEN2);



