module.exports = [{
name : "loop",//optional
type:"loopCommand",
channel : "$getServerVar[chann]",//optional
every : 7200000, // time in ms
executeOnStartup :true, //if true, the command will execute on startup
code :`auto share 2 hours
$onlyIf[$getServerVar[auto]==true;]
$onlyIf[$getServerVar[pm]==true;]`,
}]