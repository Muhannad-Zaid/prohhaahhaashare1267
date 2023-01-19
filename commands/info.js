module.exports = [{
name:"info",
code:`$if[$getServerVar[lang]==en]
$reply[$messageID;{title:Server Info}{color:$getServerVar[c]}{timestamp:ms}{thumbnail:$serverIcon}
{field:Invites: $sum[$userInfo[real;$clientID];$userInfo[fake;$clientID]]}
{field:Channel:
> $if[$getServerVar[chann]!=]
<#$getServerVar[chann]>
$else
Channel doesn't specified
$endif}
{field:Embed Color:
> __$getServerVar[c]__}
{field: > Description:$getServerVar[description]}
{field:Language:> $replaceText[$replaceText[$getServerVar[lang];en;:flag_us: | English];ar;:flag_iq: | Arabic]}
{field:Server Banner:👇}
{image:$getServerVar[image]};no]
$else
$reply[$messageID;{title:معلومات الخادم}{color:$getServerVar[c]}{timestamp:ms}{thumbnail:$serverIcon}
{field:عدد الدعوات: $sum[$userInfo[real;$clientID];$userInfo[fake;$clientID]]}
{field:روم النشر:
> $if[$getServerVar[chann]!=]
<#$getServerVar[chann]>
$else
لم يتم التحديد
$endif}
{field:لون الامبد:
> __$getServerVar[c]__}
{field: > الوصف:$getServerVar[description]}
{field:اللغة:> $replaceText[$replaceText[$getServerVar[lang];en;:flag_us: | English];ar;:flag_iq: | Arabic]}
{field:بنر الخادم:👇}
{image:$getServerVar[image]};no]
$endif`
}]