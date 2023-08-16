var randomvariable1;

randomvariable1 = Math.floor(Math.random()*6)+1;
var randomimage1 = "dice"+randomvariable1+".png";
var randomimagesrc1 = "images/"+randomimage1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimagesrc1);

var randomvariable2 = Math.floor(Math.random()*6)+1;
var randomimage2 = "dice"+randomvariable2+".png";
var randomimagesrc2 = "images/"+randomimage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimagesrc2);

if(randomvariable1>randomvariable2){
    document.querySelector("h1").innerHTML="Player1 Wins!";    
}
else if(randomvariable1<randomvariable2){
    document.querySelector("h1").innerHTML="Player2 Wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}