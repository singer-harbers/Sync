var request = require('request');
var messages = [];
var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');

var channelID = "[discord channel id]";
var ip = "https://api.groupme.com/v3/groups/[groupme group id]/messages?token=[groupme token]";
var lastId = '0';

logger.remove(logger.transports.Console);

logger.add(new logger.transports.Console, {
  colorize: true
});

logger.level = 'debug';
var bot = new Discord.Client({
  token: auth.token,
  autorun: true
});


request.get({
  url: ip
}, function optionalCallback(err, httpResponse, body) {
  if (err) {
    logger.info('upload failed:', err);
  } else {
    var res = JSON.parse(body);
    lastId = res.response.messages[0].id;
    logger.info("last messsage id is:  " + lastId);
    }
});

function update(){
  request.get({
    url: ip
  }, function optionalCallback(err, httpResponse, body) {
    if (err) {
      logger.info('upload failed:', err);
    } else {
      var res = JSON.parse(body);
      if (lastId != res.response.messages[0].id){
        var counter = 0;
        while(res.response.messages[counter].id != lastId){
          counter ++;
        }
        for(var i = counter -1; i >=0; i --){
          var name = res.response.messages[i].name;
          var text = res.response.messages[i].text;
          if(name != "discordBot"){
            messages.push(name + ":  " + text);
          }
        }

        lastId = res.response.messages[0].id;
        print();
      }
    }
  });
  setTimeout(update, 1000);
}







bot.on('ready', function (evt) {
  logger.info('Connected');
  logger.info('Logged in as: ');
  logger.info(bot.username + ' – (' + bot.id + ')');
});


var postURL = 'https://api.groupme.com/v3/bots/post';

bot.on('message', function (user, userID, channelID, message, evt) {
  logger.info("message:  " + user + ":  " + message);
  if(user != "groupMe"){
    var formData = {
      "bot_id"  : "[groupme bot id]",
      "text"    : user + ":  " + message
      }
    request.post({
      url: postURL,
      formData: formData
    }, function optionalCallback(err, httpResponse, body) {
      if (err) {
        logger.info('upload failed:', err);
      }
    });
  }
});

setTimeout(update, 5000);

function print(){

  logger.info("about to print  " + messages[0]);
  if(messages.length > 0){
  bot.sendMessage({
      to: channelID,
      message: messages[0]
    });
    messages.shift();
    setTimeout(function(){print()}, 1000);
    }
}
