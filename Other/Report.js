function validate()
{
var fname=document.getElementById("fname");
var lname=document.getElementById("lname");
var city=document.getEdonatelementById("city");
var state=document.getElementById("state");
var email=document.getElementById("email");
var phone=document.getElementById("phone")
var addressofanimal=document.getElementById("addressofanimal")
var cityofanimal=document.getElementById("cityofanimal")
var stateofanimal=document.getElementById("stateofanimal")
var countryofanimal=document.getElementById("countryofanimal")
var date=document.getElementById("date")
var pincode=document.getElementById("pincode")
var concern=document.getElementById("concern")

var EMAIL=/^[a-zA-Z0-9._]+@[a-zA-Z.]+$/;

if(fname.value.length==0)
{
alert("enter fullname");
document.getElementById("email")="";
return;
}
if(lname.value.length==0)
{
alert("enter email");
document.getElementById("email")="";
return;
}
if(city.value.length==0)
{
alert("enter address");
document.getElementById("email")="";
return;
}
if(state.value.length==0)
{
alert("enter city");
document.getElementById("email")="";
return;
}
if(email.value.length==0)
{
alert("enter state");
document.getElementById("email")="";
return;
}
if(phone.value.length==0)
{
alert("enter state");
document.getElementById("email")="";
return;
}
if(addressofanimal.value.length==0)
{
alert("enter state");
document.getElementById("email")="";
return;
}
if(cityofanimal.value.length==0)
{
alert("enter state");
document.getElementById("email")="";
return;
}
if(stateofanimal.value.length==0)
{
alert("enter state");
document.getElementById("email")="";
return;
}
if(countryofanimal.value.length==0)
{
alert("enter state");
document.getElementById("email")="";
return;
}
if(date.value.length==0)
{
alert("enter state");
document.getElementById("email")="";
return;
}
if(pincode.value.length==0)
{
alert("enter state");
document.getElementById("email")="";
return;
}
if(concern.value.length==0)
{
alert("enter state");
document.getElementById("email")="";
return;
}

if(!email.value.match(EMAIL))
{
alert("invalid email");
document.getElementById("email")="";
return;
}
}
