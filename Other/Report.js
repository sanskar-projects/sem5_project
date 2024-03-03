<script>
function validate()
{
var fname=document.getElementById("fname");
var lname=document.getElementById("lname");
var city=document.getEdonatelementById("city");
var state=document.getElementById("state");
var email=document.getElementById("email");
var phone=document.getElementById("phone");
var addressofanimal=document.getElementById("addressofanimal");
var cityofanimal=document.getElementById("cityofanimal");
var stateofanimal=document.getElementById("stateofanimal");
var countryofanimal=document.getElementById("countryofanimal");
var date=document.getElementById("date");
var pincode=document.getElementById("pincode");
var concern=document.getElementById("concern");
var EMAIL=/^[a-zA-Z0-9._]+@[a-zA-Z.]+$/;
var PHONE=/^[0-9]{10}$/;
if(fname.value.length==0)
{
alert("enter firstname");
return;
}
if(lname.value.length==0)
{
alert("enter lastname");
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
if(email.value.length==0)
{
alert("enter email");
return;
}
if(phone.value.length==0)
{
alert("enter phone");
return;
}
if(addressofanimal.value.length==0)
{
alert("enter address of animal");
return;
}
if(cityofanimal.value.length==0)
{
alert("enter city of animal");
return;
}
if(stateofanimal.value.length==0)
{
alert("enter state of animal");
return;
}
if(countryofanimal.value.length==0)
{
alert("enter country of animal");
return;
}
if(!date.value)
{
alert("enter date");
return;
}
if(pincode.value.length==0)
{
alert("enter pincode");
return;
}
if(concern.value.length==0)
{
alert("enter concern");
return;
}
if(!email.value.match(EMAIL))
{
alert("invalid email");
return;
}
if(!phone.value.match(PHONE))
{
alert("invalid phone");
return;
}
}
</script>
