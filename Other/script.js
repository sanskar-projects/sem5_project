function validate()
{
var fullname=document.getElementById("fullname");
var email=document.getElementById("email");
var address=document.getElementById("address");
var city=document.getElementById("city");
var state=document.getElementById("state");
var fund=document.getElementById("fund");

var EMAIL=/^[a-zA-Z0-9._]+@[a-zA-Z.]+$/;

if(fullname.value.length==0)
{
alert("enter fullname");
return;
}
if(email.value.length==0)
{
alert("enter email");
return;
}
if(address.value.length==0)
{
alert("enter address");
return;
}
if(city.value.length==0)
{
alert("enter city");
return;
}
if(state.value.length==0)
{
alert("enter state");
return;
}
if(fund.selectedIndex==false)
{
alert("select fund");
return
}
if(!email.value.match(EMAIL))
{
alert("invalid email");
return;
}
