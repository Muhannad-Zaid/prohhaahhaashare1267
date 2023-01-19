module.exports = [{
  name:"ping", 
  code:`$if[$getServerVar[lang]==en]
**processing**
$editin[0.4s;{title:Bot Connection}{description:>>>  **
Time Taken: $botping ms
WebSocket: $ping ms
Database: $dbping ms**}{color:$getServerVar[c]}{timestamp:ms}{thumbnail:$serverIcon}]
$suppressErrors
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;]
$else
**جاري الحساب**
$editin[0.4s;{title:اتصال البوت}{description:>>>  **
الوقت المستغرق : $botping ms
الويب : $ping ms
قاعدة البيانات : $dbping ms**}{color:$getServerVar[c]}{timestamp:ms}{thumbnail:$serverIcon}]
$suppressErrors
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;]
$endif
  `
},{
name:"bot", 
code:`$if[$getServerVar[lang]==en]
$title[**bot information**]
$addField[**Links**;>>> ** [support](https://discord.gg/breDqkUndW)
[Add Me]($getBotInvite[admin])**]
$addField[The Developers :; $userTag[$splitText[1]] 
$userTag[$splitText[2]]
$textSplit[$botOwnerID[&@&];&@&]]
$addField[**Database ping**;>>> **$dbpingMs**]
$addField[**Bot ping**;>>> **$botpingMs**] 
$addField[**Joined At**;>>> ** $creationDate[$client[id];date]**]
$addField[**Version**;>>> **$packageVersion**]
$addField[**count info**;>>> **Users count : $allMembersCount 
Servers count : $serverCount**]
$color[$getServerVar[c]]
$addTimestamp
$thumbnail[$serverIcon]
$else
$title[**معلومات البوت**]
$addField[**الروابط**;>>> ** [support](https://discord.gg/breDqkUndW)
[Add Me]($getBotInvite[admin])**]
$addField[المطورين :; $userTag[$splitText[1]] 
$userTag[$splitText[2]]
$textSplit[$botOwnerID[&@&];&@&]]
$addField[**قاعدة البيانات**;>>> **$dbpingMs**]
$addField[**الوقت المستغرق**;>>> **$botpingMs**]
$addField[**انضممت في**;>>> ** $creationDate[$client[id];date]**]
$addField[**الاصدار**;>>> **$packageVersion**]
$addField[**بيانات اخرى**;>>> **عدد المستخدمين : $allMembersCount 
عدد الخوادم : $serverCount**]
$color[$getServerVar[c]]
$addTimestamp
$thumbnail[$serverIcon]
$endif`  
},{
  name: "share",
  code: `
$map[$replaceText[$getVar[channels]&&&;/&&&;];/;loop]
$if[$getServerVar[lang]==en]
$reply[$messageID;{description:✅ **Done shared your server ($serverName) in ( \`$serverCount\` ) servers <:share:975765889901277224>**} 
{color:$getServerVar[c]}{timestamp:ms};no]
$else
$reply[$messageID;{description:✅ **تم نشر خادمك ($serverName) في ( \`$serverCount\` ) خادم <:share:975765889901277224>**} 
{color:$getServerVar[c]}{timestamp:ms};no]
$endif
$if[$getServerVar[lang]==en]
$onlyIf[$sub[$membersCount;$botCount]>=5;{description:**⚠️ You can't share your server because the number of members is not enough ($membersCount)**}{color:$getServerVar[c]}]
$onlyIf[$checkContains[$serverName;shop;nsfw;بيع;شوب;طلبات;طلب;test]==false;{description:**⚠️ Please Change Server Name**}{color:$getServerVar[c]}{footer:$serverName}]
$onlyIf[$getServerVar[chann]!=;{description:**⚠️ Please Set Channel share First**}{color:$getServerVar[c]}]
 $cooldown[2h;**To be able to share again, Please wait (\`%time%\`) **]
$else
$onlyIf[$sub[$membersCount;$botCount]>=5;{description:**⚠️ لا يمكنك نشر خادمك لان عدد الاعضاء غير كافي ($membersCount)**}{color:$getServerVar[c]}]
$onlyIf[$checkContains[$serverName;shop;nsfw;بيع;شوب;طلبات;طلب;test]==false;{description:**⚠️ رجاءا قم بتغيير اسم الخادم**}{color:$getServerVar[c]}{footer:$serverName}]
$onlyIf[$getServerVar[chann]!=;{description:**⚠️ رجاءا قم بتحديد روم النشر**}{color:$getServerVar[c]}]
$cooldown[2h;**ليمكنك المحاولة مرة اخرى, رجاءا انتظر (\`%time%\`) **] 
$endif
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;] 
`
},{
 type: "awaitedCommand",
 name: "loop",
 code: `$if[$getServerVar[lang]==en]
 $if[$channelExists[{value}]==true]
$channelSendMessage[{value};
<:botInvite:975750644474458132> - $getServerInvite
{description:
<:discordServer:976102698480992316> - **Name: $serverName**
<:members:975766006804926554> - **Members: $membersCount**
<:description:976121382339489845> - **Dscription:** $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[description];{ownerTag};$usertag[$ownerid]];{ownerID};$ownerID];{ownerName};$username[$ownerid]];{ownerDiscrim};$discriminator[$ownerid]];{memberCount};$memberscount];{membersOnline};$membersCount[$guildid;online]];{serverID};];{emojisCuont};$emojiCount];{channelsCount};$channelCount];{boostCount};$serverBoostCount;$guildID]}{image: $getServerVar[image]}{color:$getServerVar[c]}]
$else 
$setvar[channels;$replaceText[$getvar[channels];{value}/;]] 
$endif
$modifyChannelPerms[$getServerVar[chann];+viewchannel;$guildID]
$else
$if[$channelExists[{value}]==true]
$channelSendMessage[{value};
<:botInvite:975750644474458132> - $getServerInvite
{description:
<:discordServer:976102698480992316> - **اسم الخادم : $serverName**
<:members:975766006804926554> - **عدد الاعضاء : $membersCount**
<:description:976121382339489845> - **الوصف :** $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[description];{ownerTag};$usertag[$ownerid]];{ownerID};$ownerID];{ownerName};$username[$ownerid]];{ownerDiscrim};$discriminator[$ownerid]];{memberCount};$memberscount];{membersOnline};$membersCount[$guildid;online]];{serverID};];{emojisCuont};$emojiCount];{channelsCount};$channelCount];{boostCount};$serverBoostCount;$guildID]}{image:$getServerVar[image]}{color:$getServerVar[c]}]
$else 
$setvar[channels;$replaceText[$getvar[channels];{value}/;]] 
$endif
$modifyChannelPerms[$getServerVar[chann];+viewchannel;$guildID]
$endif
`
},{
name:"invite",
code:`$if[$getServerVar[lang]==en]
$reply[$messageID;{title:Bot Links} 
{color:$getServerVar[c]} 
{description:$addField[**Links**;>>> ** [support](https://discord.gg/breDqkUndW)
[Add Me]($getBotInvite[admin])**]};no] 
$else
$reply[$messageID;{title:روابط البوت} 
{color:$getServerVar[c]} 
{description:$addField[**الروابط**;>>> ** [خادم الدعم](https://discord.gg/breDqkUndW)
[اضفني]($getBotInvite[admin])**]};no]
$endif
`
}]