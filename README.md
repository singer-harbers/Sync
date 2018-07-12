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
**Discord**
* Create a discord application at https://discordapp.com/login?redirect_to=%2Fdevelopers%2Fapplications%2Fme
* Make a bot account for that application. Grab the access token and client ID. 
* Add the bot to your server by replacing CLIENTID in the following link with your bot's client ID: https://discordapp.com/oauth2/authorize?client_id=CLIENTID&scope=bot

**GroupMe**
* Log in with your groupeMe account at https://dev.groupme.com/session/new
* Click on bots in the top bar, and then click the yellow "create bot" button.
<p align="center"><img src="https://i.imgur.com/HoB81Jh.png" width=228 height=auto></p>
* Choose the group that you want to be transfering messages from, name the bot, and add an avatar URL if you wish. 
* Click on the bot and find the Bot ID, Group ID, and access token. 
  * The access token can be found by clicking the "access token" button in the top right.


