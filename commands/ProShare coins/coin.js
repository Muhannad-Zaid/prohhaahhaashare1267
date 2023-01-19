module.exports = [{
name:"coin",
aliases:["coins"],
code:`**<:ProShare:975709665902092318> | $username[$get[id]], your account balance is \`$$getGlobalUserVar[coins;$get[id]]\`**
$let[id;$findUser[$message;yes]]
$onlyIf[$isBot[$findUser[$message;yes]]==false;**⚠ | The Bots haven't coins cards**]
$onlyIf[$userExists[$findUser[$message;yes]]==true;**⚠ | I can't find this user**]`
}]