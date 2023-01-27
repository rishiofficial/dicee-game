let randomNumber1 = Math.floor(Math.random() * 6 )+1;

let randomImagesource1 = "./images/dice" + randomNumber1 + ".png";

 document.querySelectorAll("img")[0].setAttribute("src", randomImagesource1); 

 //for dice2

 let randomNumber2 = Math.floor(Math.random()*6)+1;

 let randomImagesource2 = "./images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImagesource2)

//to decide winner

if(randomImagesource1 > randomImagesource2){
    document.querySelector("h1").innerHTML = "🚩Player1 is winner!";
}
else if (randomImagesource2 > randomImagesource1){
document.querySelector("h1").innerHTML = "🚩Player2 is winner";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}