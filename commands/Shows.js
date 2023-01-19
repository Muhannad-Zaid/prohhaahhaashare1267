module.exports = [{
  name:"preview", 
  code:`$if[$getServerVar[lang]==en]
$getServerInvite
$description[
**<:discordServer:976102698480992316> - Name: $serverName
<:members:975766006804926554> - Members: $membersCount
<:description:976121382339489845> - Description: $getServerVar[description]
**
$image[$getServerVar[image]]]
$color[$getServerVar[c]]
$onlyPerms[admin;{description:**⚠️ You Don't have Administrator permission**}{color:$getServerVar[c]}]
$else
$getServerInvite
$description[
**<:discordServer:976102698480992316> - اسم الخادم : $serverName
<:members:975766006804926554> - عدد الاعضاء : $membersCount
<:description:976121382339489845> - الوصف : $getServerVar[description]
**
$image[$getServerVar[image]]]
$color[$getServerVar[c]]
$onlyPerms[admin;{description:**⚠️ انت لا تمتلك صلاحيات كافية**}{color:$getServerVar[c]}]
$endif
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;]`
}]