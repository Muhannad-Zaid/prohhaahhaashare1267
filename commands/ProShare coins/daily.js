module.exports = [{
name:"daily",
code:`**✅ | You got <:ProShare:975709665902092318> $random[500;1000] of coins.**
$setGlobalUserVar[coins;$sum[$random[500;1000];$getGlobalUserVar[coins]];$authorID]
$globalCooldown[7h;**🙄 | Please wait %time%**]`
}]