const express = require('express');
const port = 3001
const app = express();

app.get('/', (req, res) => {
  res.send('ProShare')
});
app.listen(port, () => {
  console.log(`port ${port}`)
})
const Discord = require("discord.js");
const client = new Discord.Client();
process.on("unhandledRejection", error => {
  return;
});
const myt = process.env['token']
const aoijs = require("aoi.js");
const bot = new aoijs.Bot({
  token: myt,
  prefix: "$getServerVar[prefix]",
  fetchInvites: true
})
bot.variables({
  setup: "no",
  channels: "",
  chann: "",
  description: "a nice server with cool description",
  Blacklist: "false",
  prefix: "-",
  image: "",
  c: "FFFFFF",
  lang: "en",
  coins: "0",
  pm:"false",
  auto:"false",
})
bot.status({
  text: "$getVar[prefix]help | $serverCount Guilds | $allMembersCount Users",
  type: "PLAYING",
  status: "online",
  time: 12
})
bot.onMessage({
  respondToBots: false,
  guildOnly: false,
})
bot.readyCommand({
  channel: "",
  code: `$log[Ready on $usertag[$clientid]]
`
})
bot.loadCommands(`./commands/`)
bot.onGuildJoin()

bot.botJoinCommand({
  channel: "978581769404170280",
  code: `$author[$userTag[$clientID];$userAvatar[$clientID]]
$thumbnail[$serverIcon[$guildID;;yes]]
$title[$serverName[$guildID]]
$color[$getServerVar[c]]
$description[
$addField[Invite :; $getServerInvite]
$addField[Roles Count :; $roleCount]
$addField[Channels Count :; 
All Channels Count : $channelCount
Text : $channelCount[text]
Voice : $channelCount[voice]
Category : $channelCount[category]]
$addField[Boost :; <:boost:804607689349922846> | $replaceText[$serverBoostCount;0;No Boost] | $serverBoostLevel]
$addField[Members Count :; 👤 | Humans : $membersCount[$guildID;all;no]
<:as_online:889851232359944223> | Online : $membersCount[$guildID;online;no] <:as_bot:900278783297339412> | $math[$membersCount[$guildID;online;yes]-$membersCount[$guildID;online;no]]
<:as_idle:889851060888412190> | Idle : $membersCount[$guildID;idle;no] <:as_bot:900278783297339412> | $math[$membersCount[$guildID;idle;yes]-$membersCount[$guildID;idle;no]]
<:as_dnd:889851759558803456> | Dnd : $membersCount[$guildID;dnd;no] <:as_bot:900278783297339412> | $math[$membersCount[$guildID;dnd;yes]-$membersCount[$guildID;dnd;no]]
<:as_offline:889850311550832650> | Offline : $membersCount[$guildID;offline;no] <:as_bot:900278783297339412> | $math[$membersCount[$guildID;offline;yes]-$membersCount[$guildID;offline;no]]]
$addField[Owned By :; <:crown:896353446515597372> | <@$ownerID> | $userTag[$ownerID] | $ownerID]
$addField[Created On :; $creationDate[$guildID;date]]
$addField[Server ID :; $guildID;yes]
]
$addTimestamp
$footer[Requested by $userTag[$authorID];$userAvatar[$authorID]]`
})