module.exports = [{
name:"help",
code:`$if[$getServerVar[lang]==en]
$apiMessage[$channelID;;{description:
**General Commands :**
> \`$getServerVar[prefix]invite\`  
> \`$getServerVar[prefix]bot\` 
> \`$getServerVar[prefix]ping\`
> \`$getServerVar[prefix]help\`
> \`-info\`

**Language Commands :**
> \`$getServerVar[prefix]lang-en\`
> \`$getServerVar[prefix]lang-ar\`

**Share Commands :**
> \`$getServerVar[prefix]channel [#CHANNEL]\`
> \`$getServerVar[prefix]desc [DESCRIPTION]\`
> \`$getServerVar[prefix]banner [LINK]\`
> \`$getServerVar[prefix]color [HEX]\`
> \`$getServerVar[prefix]preview\`
> \`$getServerVar[prefix]share\`}{color:$getServerVar[c]} {title:> Bot Commands}{footer:ProShare}{timestamp:ms}{thumbnail:$serverIcon};{actionRow:Bot Invite,2,5,https\\://discord.com/oauth2/authorize?client_id=850452655347073034&scope=bot+applications.commands&permissions=8:Support Server,2,5,https\\://discord.gg/vyUxDsre}] 
$cooldown[15s;**Please wait %time% to try again.**]
$deleteIn[5s]
$else
$apiMessage[$channelID;;{description:
**الاوامر العامة :**
> \`$getServerVar[prefix]invite\`  
> \`$getServerVar[prefix]bot\` 
> \`$getServerVar[prefix]ping\`
> \`$getServerVar[prefix]help\`
> \`-info\`

**اوامر اللغة :**
> \`$getServerVar[prefix]lang-en\`
> \`$getServerVar[prefix]lang-ar\`

**اوامر النشر :**
> \`$getServerVar[prefix]channel [#CHANNEL]\`
> \`$getServerVar[prefix]desc [DESCRIPTION]\`
> \`$getServerVar[prefix]banner [LINK]\`
> \`$getServerVar[prefix]color [HEX]\`
> \`$getServerVar[prefix]preview\`
> \`$getServerVar[prefix]share\`}{color:$getServerVar[c]} {title:> اوامر البوت}{footer:ProShare}{timestamp:ms}{thumbnail:$serverIcon};{actionRow:اضافة البوت,2,5,https\\://discord.com/oauth2/authorize?client_id=850452655347073034&scope=bot+applications.commands&permissions=8:خادم الدعم,2,5,https\\://discord.gg/vyUxDsre}] 
$cooldown[15s;**رجاءا انتظر %time% للمحاواة مرة اخرى.**]
$deleteIn[5s]
$endif
`
}]