module.exports = [{
name:"lang-ar",
code:`$reply[$messageID;**✅ | تم تغيير اللغة الى اللغة العربية**;no]
$setServerVar[lang;ar]
$onlyIf[$getServerVar[lang]!=ar;**⚠️ | اللغة هي بالفعل العربية.**]
$onlyPerms[admin;$replaceText[$replaceText[$getServerVar[lang];en;**⚠️ | You don't have permissions \`ADMINISTRATOR\`.**]; ar;**⚠️ | انت لا تمتلك صلاحية \`ADMINISTRATOR\`.**]`
},{
name:"lang-en",
code:`$reply[$messageID;**✅ | Done changed the language to English**;no]
$setServerVar[lang;en]
$onlyIf[$getServerVar[lang]!=en;**⚠️ | The language is already English.**]
$onlyPerms[admin;$replaceText[$replaceText[$getServerVar[lang];en;**⚠️ | You don't have permissions \`ADMINISTRATOR\`.**]; ar;**⚠️ | انت لا تمتلك صلاحية \`ADMINISTRATOR\`.**]`
}]