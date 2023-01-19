module.exports = [{
name:"add-premium",
aliases:["add-pm"],
code:`**✅ Done added premium to __$serverName[$message[1]]__ for __$messageSlice[1]__**
$setServerVar[pm;true;$message[1]]
$onlyIf[$messageSlice[1]!=;**⚠️ | Please specify a duration**]
$onlyIf[$message[1]!=;**⚠️ | Please specify a guildID**]`
}]