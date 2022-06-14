
const { Client, Intents } = require('discord.js');

const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

var bee = require("./bee.json");
var amd = require("./amd.json");


bot.on("message", msg => {
	if (msg.content == "pls bee"){
		console.log("Command fired by " + msg.author.name + "! Posting Bee...");
		var i = 0;
		var running = setInterval( beeFunction, 2000);
		function beeFunction(){
		  var line = bee[i];
		  msg.channel.send(line);
		  if( i++ >= bee.length ) clearInterval(running);
		}
	}

	if (msg.content == "pls bazooka"){
		console.log("Command fired by " + msg.author.name + "! Posting Amodo...");
		var i = 0;
		var running = setInterval( amdFunction, 2000);
		function amdFunction(){
		  var line = amd[i];
		  msg.channel.send(line);
		  if( i++ >= amd.length ) clearInterval(running);
		}
	}
});



bot.on("ready", function(){
	console.log("BeeBot is running!");
});

bot.login("OTg2MjAyNDI3ODg5OTQ2NjI1.GaxNJI.CwJbB-FLbVmO1wcC2VEtvQNHMP_aIZ04ffskHY");



