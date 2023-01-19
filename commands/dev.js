module.exports = [{
name:"eval", 
aliases: ["e"],
  code:`$eval[$message] 
$onlyForIDs[748877426091884616;741782549616918629;]`
},{
name:"reload",
aliases:["re"],
code:`$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$commandsCount;1;1️⃣];2;2️⃣];3;3️⃣];4;4️⃣];5;5️⃣];6;6️⃣];7;7️⃣];8;8️⃣];9;9️⃣];0;0️⃣] $let[new;$math[$get[after]-$get[before]]]
  $let[after;$commandsCount]
  $updateCommands
 $let[before;$commandsCount]
$onlyForIDs[748877426091884616;741782549616918629;]`
},{
nonPrefixed:true,
name:"<@$clientID>",
aliases:["<@!$clientID>","$userTag[$clientID]"],
code:`$if[$getServerVar[lang]==en]
**My Prefix : $getServerVar[prefix]**
$else
**بادئتي هي : $getServerVar[prefix]**
$endif`
},{
name:"line",
code:`https://media.discordapp.net/attachments/974994354773045248/980425998199836713/20220529_140243.jpg
$deletecommand`
}]