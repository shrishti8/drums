/*function handle()
{
alert("I got clicked");
}
var j=document.querySelectorAll(".set button").length;
for(var i=0;i<j;i++)
{
  document.querySelectorAll(".set button")[i].addEventListener("click",handle);
}         this was how to select all buttons at once using loop*/
/*var j=document.querySelectorAll(".set button").length;
for(var i=0;i<j;i++)
{
  document.querySelectorAll(".set button")[i].addEventListener("click",function()
{
if(this.innerHTML=='w')
{
  this.style.color="white";
var audio=new Audio("tom-1.mp3");
audio.play();
}
if(this.innerHTML=='a')
{
    this.style.color="white"
  var audio1=new Audio("tom-2.mp3");
  audio1.play();
}
if(this.innerHTML=='s')
{
    this.style.color="white"
  var audio1=new Audio("tom-3.mp3");
  audio1.play();
}
if(this.innerHTML=='d')
{
    this.style.color="white"
  var audio1=new Audio("tom-4.mp3");
  audio1.play();
}
if(this.innerHTML=='j')
{
    this.style.color="white"
  var audio1=new Audio("snare.mp3");
  audio1.play();
}
if(this.innerHTML=='k')
{
    this.style.color="white"
  var audio1=new Audio("crash.mp3");
  audio1.play();
}
if(this.innerHTML=='l')
{
    this.style.color="white"
  var audio1=new Audio("kick-bass.mp3");
  audio1.play();
}
});
}                 <-- for adding sound in javascript using if else*/
//---Detecting button click---
var j=document.querySelectorAll(".set button").length;
for(var i=0;i<j;i++)
{
  document.querySelectorAll(".set button")[i].addEventListener("click",function()
{
  var s=this.innerHTML;
  makeSound(s);
  animation(s);
});
}
//---Detecting keyboard press---
document.addEventListener("keypress",function(event){
  makeSound(event.key);
  animation(event.key);
});
function makeSound(key) {

  switch (key)
  {
    case "w":
          var audio=new Audio("tom-1.mp3");
          audio.play();

    break;
  case "a":

         var audio1=new Audio("tom-2.mp3");
         audio1.play();
    break;
  case "s":
         var audio2=new Audio("tom-3.mp3");
         audio2.play();
    break;
  case "d":
         var audio3=new Audio("tom-4.mp3");
         audio3.play();
   break;
   case "j":
         var audio4=new Audio("snare.mp3");
         audio4.play();
  break;
  case "k":
         var audio5=new Audio("crash.mp3");
         audio5.play();
  break;
  case "l":
        var audio6=new Audio("kick-bass.mp3");
        audio6.play();
  break;
  default:
  console.log(key);
  }
}
function animation(currentkey)
{
  var active=document.querySelector("."+currentkey);
  active.classList.add("pressed");
setTimeout(function()
{
  active.classList.remove("pressed");
}, 100);
}
