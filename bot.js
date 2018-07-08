var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
const spawn = require("child_process").spawn;
var tw


var sub




logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';

var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.editUserInfo( {
                   username : " " });

bot.on('ready', function (evt) {
    
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function (user, userID, channelID, message, evt) {
  
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
        
     }
});



const Dis = require('discord.js');
const client = new Dis.Client();

client.login(auth.token);


