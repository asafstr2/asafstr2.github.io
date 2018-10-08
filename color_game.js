
 	var boxes = 6;
	var colors = [];
	var resetv = document.querySelector("#reset");
	var colorDispley = document.querySelector("#picker");
	var squares = document.querySelectorAll(".square");
	var massage=document.querySelector("#massage");
	var easyv=document.querySelector("#easy");
	var hardv=document.querySelector("#hard");
	var h1= document.querySelector("h1");
	var mySound;
	mySound = new sound("ta_da.mp3");
	var pickedColor;
	var easyMode=false;
	refresh();
	pickedColors();
	main();


function main(){
for (var i=0;i<squares.length;i++){
squares[i].addEventListener("click",function(){
var mid=this.style.backgroundColor;
if (mid===pickedColor) {
 	rightColor(mid);
	h1.style.backgroundColor=mid;
	resetv.textContent="play again?"
 massage.textContent="Correct!";
 mySound.play();
}
else {this.style.backgroundColor="black";  
this.classList.remove("thumbnail");
 massage.textContent=" Try again!";
  }
});}}


function pickColor(){
	var r=Math.floor(Math.random()*255);
	var g=Math.floor(Math.random()*255);
	var b=Math.floor(Math.random()*255);
	var random="rgb("+r+", "+g+", "+b+")";
	return random;
}
function pickColorfrom(){
var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function rightColor(mid){

for (var i=0;i<squares.length;i++){

 	squares[i].style.backgroundColor=mid;
 	squares[i].classList.add("thumbnail");
 	if (easyMode && i==2){i=6};}
}



function generateRandomcolor (colorNum){
for(i = 0; i < boxes; i++) {
   colors.push(pickColor());
}return colors;
}

function pickedColors(){
 pickedColor=pickColorfrom();
	colorDispley.textContent=pickedColor;
}

function refresh(){
	h1.style.backgroundColor="steelblue"
	massage.textContent=""
	colors = [];
	colors=generateRandomcolor();
	for (var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=colors[i];}}

	reset.addEventListener("click", function(){ 
	if(easyMode){fade();}
	refresh();
	pickedColors();
	main();
	resetv.textContent="change color"
});



		easy.addEventListener("click", function(){ 
		boxes=3;
		colors=[];
		fade();
		refresh();
		pickedColors();
		main();
		easyMode=true;
		hardv.classList.remove("btn-primary");
		hardv.classList.add("btn-info");
		easyv.style.background=none;
		easyv.classList.remove("btn-info");
		easyv.classList.add("btn-primary");
	});
		
		hard.addEventListener("click", function(){ 
		boxes=6;
		colors=[];
		refresh();
		pickedColors();
		main();
		easyMode=false;
	
		easyv.classList.remove("btn-primary");
		easyv.classList.add("btn-info");
		hardv.classList.remove("btn-info");
		hardv.classList.add("btn-primary");
	});
		function fade(){
	for (var i=0;i<squares.length;i++){
 	squares[i].style.backgroundColor="black";
 	squares[i].classList.remove("thumbnail");}
}
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}