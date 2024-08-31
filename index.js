var randomNumber1 = Math.floor(Math.random()*6)+1
var imgvalue1 = "images/dice" + randomNumber1 +".png"
var image1 = document.querySelector(".img1")
var dice1 = image1.setAttribute("src", imgvalue1)

var randomNumber2 = Math.floor(Math.random()*6)+1
var imgvalue2 = "images/dice" + randomNumber2 +".png"
var image2 = document.querySelector(".img2")
var dice2 =image2.setAttribute("src", imgvalue2)

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Won"
}
else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Won"
}
else if (randomNumber1 === randomNumber2){
  document.querySelector("h1").innerHTML = "Draw"
}
