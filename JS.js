var n=1;
var N=0;
const arr=
[
"Outside of a dog, a book is man's best friend. Inside of a dog it's too dark to read.<br>~Groucho Marx",

"Happiness is a warm puppy.<br>~Charles M. Schulz",

"Dogs never bite me. Just humans.<br>~Marilyn Monroe",

"The clearest way into the Universe is through a forest wilderness.<br>~John Muir",

"If you pick up a starving dog and make him prosperous he will not bite you. This is the principal difference between a dog and man.<br>~Mark Twain",

"Some people talk to animals. Not many listen though. That's the problem.<br>~A.A. Milne",

"I am fond of pigs. Dogs look up to us. Cats look down on us. Pigs treat us as equals.<br>~Winston S. Churchill",

"If animals could speak, the dog would be a blundering outspoken fellow; but the cat would have the rare grace of never saying a word too much.<br>~Mark Twain",

"A dog is the only thing on earth that loves you more than he loves himself.<br>~Josh Billings"
];

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
document.getElementById("2").innerHTML=arr[N];
if(n<8)
{
N+=1;
return;
}
N=0;
}

function home()
{
arr=["about","adopt","contact","donate","rescue"];
x=Math.floor(Math.random()*5);
document.getElementById("iframe").src=arr[x]+".html";
}

function set()
{
setInterval(slideshow,1000);
setInterval(quote,1000);
}
