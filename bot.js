var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
const spawn = require("child_process").spawn;
var tw


var sub



// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.editUserInfo( {
                   username : "Ratbot " });

bot.on('ready', function (evt) {
    
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
        if (message.substring(1,6) == 'tweet'){
             bot.sendMessage({
                    to: channelID,
                    message: 'Tweet : '})
            var tweetname = message.substring(6);
            tw = tweetname;
            const pythonProcess = spawn('python',['./TweetBot.py',tw ]);
            pythonProcess.stdout.on('data', (data) => {
            bot.sendMessage({
                    to: channelID,
                    message: ' '+ data
                    
                });})}
        
        
        
        if (message.substring(1,7) == 'reddit'){
                    bot.sendMessage({
                        to: channelID,
                        message: 'REDDIT : '})
            var subname = message.substring(8);
            sub = subname;
            const pythonProcess2 = spawn('python',['./RedditImgBot.py',sub ]);
            pythonProcess2.stdout.on('data', (data) => {
            bot.sendMessage({
                    to: channelID,
                    message: ' '+ data
                    
                });})}
        
        
        if (message.substring(1,8) == 'mastery'){
                    bot.sendMessage({
                        to: channelID,
                        message: 'LEAGUE : '})
            var input = message.substring(9);
            var args = input.split(" ");
            const pythonProcess3 = spawn('python',['./league.py',args[0],args[1] ]);
            pythonProcess3.stdout.on('data', (data) => {
            bot.sendMessage({
                    to: channelID,
                    message: ' ' + data
                    
                });})}
        
    

            
            
            
        
        
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'aravind':
                bot.sendMessage({
                    to: channelID,
                    message: 'suckmydickaravind!'
                });
            break;
            case 'senthil' :
                 bot.sendMessage({
                    to: channelID,
                    message: 'senthil o great one'});
                 break;
                 case 'sada' :
                 bot.sendMessage({
                    to: channelID,
                    message: 'sada 10/10 babe'});
                 
            
         }
     }
});



const Dis = require('discord.js');
const client = new Dis.Client();

client.login(auth.token);

client.on('message', message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === '!ayy') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          message.reply('I have successfully connected to the channel!');
          const dispatcher = connection.playFile('G:/Music/zombie.mp3');
        })
        .catch(console.log);
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
});
