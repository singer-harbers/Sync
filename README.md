# discord-groupme-sync
Forwards all messages from discord or groupme to the other program through the use of two bots.

### Requirements
**Required**:
* **Node.js v8.9.4** or greater

### Dependencies
**Required**:
* **discord.io** github:woor/discord.io#gateway_v6
* **request** v2.87.0
* **winston** v3.0.0

### Getting Started
Note: Make sure you have node installed, if you don't you can download it <a href="https://nodejs.org/en/download/"> here</a>

**Discord**
* Create a <a href="https://discordapp.com/login?redirect_to=%2Fdevelopers%2Fapplications%2Fme">discord application</a>
* Make a bot account for that application. Make sure that "Public Bot" is checked. Grab the access token and client ID for your server. Remember these, you'll need them later.
<p align="left"><img src="https://i.imgur.com/LYRZAqw.png" width 300 height=auto></p>

* Add the bot to your server by replacing CLIENTID in the following link with your bot's client ID: https://discordapp.com/oauth2/authorize?client_id=CLIENTID&scope=bot
<p align="center"><img src="https://i.imgur.com/GTJJlkR.png" width=300 height=auto></p>


**GroupMe**
* Log in with your <a href="https://dev.groupme.com/session/new">groupme account<a>
* Click on bots in the top bar, and then click the yellow "create bot" button.
<p align="left"><img src="https://i.imgur.com/HoB81Jh.png" width=399 height=auto></p>

* Choose the group that you want to be transfering messages from, name the bot, and add an avatar URL if you wish. 
* Click on the bot and find the Bot ID, Group ID, and access token. Remember these you'll need them later. 
  * The access token can be found by clicking the "access token" button in the top right.
  
**Installation**
* Clone repository.
* In command prompt, navigate to the files and run `npm install` to install all dependencies.
* Open bot.js in your perfered text editor and change:
  * [discord channel id] I recommend <a href="https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-"> this guide</a>,from discord, to get it.
  * [discord bot name]
  * [groupme bot name]
  * [groupme group id]
  * [groupme token]
  * [groupme bot id]
* Open auth.json in your perfered text editor and change:
  * [discord bot token]

**Execution**
* In command prompt, navigate to the files and run `node bot.js` 
------------------------------------------------------------------------------------------------------------------------------
### Donations
* Bitcoin: 1BEnxcJ13RzaJCo9oLHUsLyC9Nup7VsvkT
* Etherium: 0x0f94299992f6ed67d1ac4d00e3ee582dfa6eb408
* Bitcoin Cash: 1Jovp5ychP9E9Hz9QriDMErVs1CDcnDCdd


