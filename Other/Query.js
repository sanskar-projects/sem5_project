<script>
function validate()
{
var fullname=document.getElementById("fullname");
var email=document.getElementById("email");
var phone=document.getEdonatelementById("phone");
var query=document.getElementById("query");
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
if(phone.value.length==0)
{
alert("enter address");
return;
}
if(query.value.length==0)
{
alert("enter city");
return;
}
if(!email.value.match(EMAIL))
{
alert("invalid email");
return;
}
}
</script>
