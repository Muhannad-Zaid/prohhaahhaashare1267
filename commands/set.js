module.exports = [{
name: "desc",
code: `$if[$getServerVar[lang]==en]
$setServerVar[description;$message]
$reply[$messageID;{title:$serverName} 
{description: > **✅ - The bio has been saved**
$message} 
{color:$getServerVar[c]};no]
$onlyIf[$charCount[$message]>=10;{description:description is too short}{color:$getServerVar[c]}] 
$onlyIf[$charCount[$messsage]<=1501;{description:description is too long}{color:$getServerVar[c]}] 
$onlyIf[$checkContains[$message;https;.com;.gg;http;shop;pay;شوب;بيع;nsfw;Nsfw;NSFW;kill;guns;blood]==false;{description:**\`\`🤔 You can't use this description\`\`**}{field:**Description**:\`$message\`}{color:$getServerVar[c]}{thumbnail:$authorAvatar}] 
$onlyIf[$message!=;{description:**\`\`Please Type Your Server Description\`\`**}{color:$getServerVar[c]}]
$onlyPerms[admin;{description:**⚠️ You Don't have Administrator permission**}{color:$getServerVar[c]}]
$else
$reply[$messageID;{title:$serverName} 
{description: > **✅ - تم تغيير الوصف**
$message} 
{color:$getServerVar[c]};no]
$onlyIf[$charCount[$message]>=10;{description:الوصف قصير}{color:$getServerVar[c]}] 
$onlyIf[$charCount[$messsage]<=1501;{description:الوصف طويل}{color:$getServerVar[c]}] 
$onlyIf[$checkContains[$message;https;.com;.gg;http;shop;pay;شوب;بيع;nsfw;Nsfw;NSFW;kill;guns;blood]==false;{description:**🤔 لا يمكنك استخدام هذا الوصف**}{field:**Description**:\`$message\`}{color:$getServerVar[c]}{thumbnail:$authorAvatar}] 
$onlyIf[$message!=;{description:**رجاءا قم بكتابة وصف**}{color:$getServerVar[c]}]
$onlyPerms[admin;{description:**⚠️ انت لا تمتلك صلاحيات كافية**}{color:$getServerVar[c]}]
$endif
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;]
`
},{
  name: "channel",
  aliases:["set-channel"],
  code: `$if[$getServerVar[lang]==en]
$if[$getServerVar[setup]==no]
$description[**✅ - Done select the channel**
> <#$mentionedChannels[1]>] 
$color[$getServerVar[c]] 
$setVar[channels;$mentionedChannels[1]/$getVar[channels]]
$setServerVar[chann;$mentionedChannels[1]]
$setServerVar[setup;yes]
$onlyIf[$mentionedChannels[1]!=;{description:⚠️ - **Please Mention Channel**}{color:$getServerVar[c]}]
$onlyPerms[admin;{description:**⚠️ You Don't have Administrator permission**}{color:$getServerVar[c]}]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;]
$endif
$if[$getServerVar[setup]==yes]
$reply[$messageID;{description:**✅ - Done select the channel** 
> <#$mentionedChannels[1]>} 
{color:$getServerVar[c]} 
{thumbnail:$serverIcon};no]
$setServerVar[chann;$mentionedChannels[1]]
$setvar[channels;$replaceText[$getvar[channels];$getServerVar[chann]/;$mentionedChannels[1]/]]
$onlyIf[$mentionedChannels[1]!=;{description:**Please Mention Channel**}{color:$getServerVar[c]}]
$onlyPerms[admin;{description:**⚠️ You Don't have Administrator permission**}{color:$getServerVar[c]}]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;]
$endif
$else
$if[$getServerVar[setup]==no]
$description[**✅ - تم تحديد الروم**
> <#$mentionedChannels[1]>] 
$color[$getServerVar[c]] 
$setVar[channels;$mentionedChannels[1]/$getVar[channels]]
$setServerVar[chann;$mentionedChannels[1]]
$setServerVar[setup;yes]
$onlyIf[$mentionedChannels[1]!=;{description:⚠️ - **رجاءا قم بمنشن روم**}{color:$getServerVar[c]}]
$onlyPerms[admin;{description:**⚠️ انت لا تمتلك صلاحيات كافية**}{color:$getServerVar[c]}]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;]
$endif
$if[$getServerVar[setup]==yes]
$reply[$messageID;{description:**✅ - تم تحديد الروم** 
> <#$mentionedChannels[1]>} 
{color:$getServerVar[c]} 
{thumbnail:$serverIcon};no]
$setServerVar[chann;$mentionedChannels[1]]
$setvar[channels;$replaceText[$getvar[channels];$getServerVar[chann]/;$mentionedChannels[1]/]]
$onlyIf[$mentionedChannels[1]!=;{description:**رجاءا قم بمنشن روم**}{color:$getServerVar[c]}]
$onlyPerms[admin;{description:**⚠️ انت لا تمتلك صلاحيات كافية**}{color:$getServerVar[c]}]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;]
$endif
$endif
`},{
name:"banner",
code:`$if[$getServerVar[lang]==en]
$setServerVar[image;$message]
$reply[$messageID;{title:$serverName} 
{description: > **✅ - The banner has been saved**} 
{image:$message} 
{color:$getServerVar[c]};no]
$onlyIf[$isValidLink[$message]==true;{description:Must be a valid image link}{color:$getServerVar[c]}]
$onlyIf[$message!=;{description:Specify an image link}{color:$getServerVar[c]}]
$onlyPerms[admin;{description:**⚠️ You Don't have Administrator permission**}{color:$getServerVar[c]}]
$else
$setServerVar[image;$message]
$reply[$messageID;{title:$serverName} 
{description: > **✅ - تم نحديد البنر بنجاح**} 
{image:$message} 
{color:$getServerVar[c]};no]
$onlyIf[$isValidLink[$message]==true;{description:يجب ان يكون رابط صورة صالح}{color:$getServerVar[c]}]
$onlyIf[$message!=;{description:قم بتحديد صورة}{color:$getServerVar[c]}]
$onlyPerms[admin;{description:**⚠️ لا تمتلك صلاحيات كافية**}{color:$getServerVar[c]}]
$endif
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;]`
},{
name:"color",
code:`$if[$getServerVar[lang]==en]
$setServerVar[c;$message]
$reply[$messageID;{title:$serverName} 
{description: > **✅ - The color has been saved**} 
{color:$message} 
{image:https://serux.pro/rendercolour?hex=$message};no]
$onlyIf[$isValidHex[$message]==true;{description:Must be a valid hex code}{color:$getServerVar[c]}]
$onlyIf[$message!=;{description:Specify an hex code}{color:$getServerVar[c]}]
$onlyPerms[admin;{description:**⚠️ You Don't have Administrator permission**}{color:$getServerVar[c]}]
$else
$setServerVar[c;$message]
$reply[$messageID;{title:$serverName} 
{description: > **✅ - تم تحديد اللون**} 
{color:$message} 
{image:https://serux.pro/rendercolour?hex=$message};no]
$onlyIf[$isValidHex[$message]==true;{description:يجب ان يكون كود صالح}{color:$getServerVar[c]}]
$onlyIf[$message!=;{description:قم بتحديد كود لون}{color:$getServerVar[c]}]
$onlyPerms[admin;{description:**⚠️ لا تمتلك صلاحيات كافية**}{color:$getServerVar[c]}]
$endif
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;]`
}]