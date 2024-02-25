var n=1;

function slideshow()
{
document.getElementById("1").src=n+".jpg";
if(n<15)
{
n+=1;
return;
}
n=1;
}

function quote()
{
document.getElementById("2").innerHTML="HELLO<br>WORLD";
}

function set()
{
setInterval(slideshow,1000);
setInterval(quote,1000);
}