function donatevalidate()
{
var fullname=document.getElementById("fullname");
var email=document.getElementById("email");
var address=document.getEdonatelementById("address");
var city=document.getElementById("city");
var state=document.getElementById("state");
var fund=document.getElementById("fund");
var EMAIL=/^[a-zA-Z0-9._]+@[a-zA-Z.]+$/;
if(fullname.value.length==0)
{
alert("enter fullname");
document.getElementById("email")="";
return;
}
if(email.value.length==0)
{
alert("enter email");
document.getElementById("email")="";
return;
}
if(address.value.length==0)
{
alert("enter address");
document.getElementById("email")="";
return;
}
if(city.value.length==0)
{
alert("enter city");
document.getElementById("email")="";
return;
}
if(state.value.length==0)
{
alert("enter state");
document.getElementById("email")="";
return;
}
if(fund.selectedIndex==false)
{
alert("select fund");
document.getElementById("email")="";
return
}
if(!email.value.match(EMAIL))
{
alert("invalid email");
document.getElementById("email")="";
return;
}
}
