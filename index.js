if (!process.env.token) {
    console.log('Error: Specify token in environment');
    process.exit(1);
}

var Botkit = require('Botkit');
var os = require('os');
var google = require('googleapis');
var googleAuth = require('google-auth-library');
var readline = require('readline');
var Regex = require("regex");

var express = require("express");
var app = express();

var clientSecret = credentials.client_secret;
var clientId = credentials.client_id;
var redirectUrl = credentials.redirect_url;
var auth = new googleAuth();
var oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);

//oauth2Client.credentials = credentials.token;


//doThings(oauth2Client);

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.listen(8000)


// var channelInitiatorId= {};
// var controller = Botkit.slackbot({
//     debug: true
// });

// var bot = controller.spawn({
//     token: process.env.token
// }).startRTM();

// controller.hears(['^start order'], 'direct_message,direct_mention,mention', function(bot, message) {
//     bot.startConversation(message,function(err,convo) {
//         if (!channelInitiatorId[message.channel]){
//             channelInitiatorId[message.channel] = message.user;
//             console.log("ASDFASDF" + message.user);
//             convo.ask("How many minutes do you want the order opened for?",
//                 [{
//                     pattern: '^[0-9]+$',
//                     callback: function(response,convo) {
//                         convo.say("CLOSING ORDER IN " + response.text + " MINUTE(S)! GET 'EM IN.");
//                         var waitTime = parseInt(response.text) * 60 * 1000;

//                         setTimeout(function(){
//                             channelInitiatorId[message.channel] = null;
//                             bot.say({
//                                 text: "Time's up - closing order!",
//                                 channel: response.channel
//                             });
//                         }, waitTime);

//                         convo.next();
//                     }
//                 },
//                 {
//                     default: true,
//                     callback: function(response,convo) {
//                         convo.say("I don't understand what you're saying...");
//                         convo.repeat();
//                         convo.next();
//                     }
//             }]);
//         }else if (channelInitiatorId[message.channel] === message.user){
//             convo.ask("An order has already been started, would you would like to cancel it?",
//                 [{
//                     pattern: bot.utterances.yes,
//                     callback: function(response,convo) {
//                         channelInitiatorId[message.channel] = null;
//                         convo.say('Okay, the current boba order has been cancelled!');
//                         convo.next();
//                     }
//                 },
//                 {
//                     pattern: bot.utterances.no,
//                     callback: function(response,convo) {
//                         convo.say('Okay, nevermind then!');
//                         convo.next();
//                     }
//                 },
//                 {
//                     default: true,
//                     callback: function(response,convo) {
//                         convo.say("I don't understand what you're saying...");
//                         convo.repeat();
//                         convo.next();
//                     }
//                 }]);
//         }else {
//             convo.ask("An order has already been started, but you are not the owner - are you sure you want to cancel the order?",
//                 [{
//                     pattern: bot.utterances.yes,
//                     callback: function(response,convo) {
//                         channelInitiatorId[message.channel] = null;
//                         convo.say('Okay, the current boba order has been cancelled!');
//                         convo.next();
//                     }
//                 },
//                 {
//                     pattern: bot.utterances.no,
//                     callback: function(response,convo) {
//                         convo.say('Okay, nevermind then!');
//                         convo.next();
//                     }
//                 },
//                 {
//                     default: true,
//                     callback: function(response,convo) {
//                         convo.say("I don't understand what you're saying...");
//                         convo.repeat();
//                         convo.next();
//                     }
//             }]);
//         }
//     });
// });

// controller.hears(['.*close order.*'], 'direct_message,direct_mention,mention', function(bot, message) {
//    bot.reply(message, "Okay, I'm closing the order. Thanks for using bobabot <3");
//    channelState[message.channel] = states.IDLE;
// });

// controller.hears(['.+'], 'direct_message,direct_mention,mention', function(bot, message) {

//     var regex = new Regex(/^start order/);
//     bot.api.reactions.add({
//         timestamp: message.ts,
//         channel: message.channel,
//         name: 'robot_face',
//     }, function(err, res) {
//         if (err) {
//             bot.botkit.log('Failed to add emoji reaction :(', err);
//         }
//     });


//     controller.storage.users.get(message.user, function(err, user) {
//         if (user && user.name) {
//             bot.reply(message, 'Hello ' + user.name + '!!');
//         } else {
//             bot.reply(message, 'Hello.');
//         }
//     });
// });
