"use strict";

// if – Hvis noget er sandt, gør dette
// else if – Hvis den første betingelse ikke var sand, tjek denne i stedet
// else – Hvis ingen af de andre betingelser er sande, gør dette


let gameRunning = true; //Denne variabel bruges til at styre, om spillet skal fortsætte eller ej.
const targetNumber = Math.floor(Math.random() * 101); 

//Math.random() * 101 giver et tal mellem 0 og 100.999... 
//Math.floor() afrunder ned, så vi får et heltal mellem 0 og 100.

while (gameRunning){
    let userGuess = prompt('Gæt et tal mellem 0 og 100!') //prompt() åbner en dialogboks, hvor brugeren kan skrive et tal.

    //Input fra prompt() er altid en string, så vi skal omdanne det til et tal:
    userGuess = Number(userGuess);
    //Number() omdanner inputtet til et tal.
    
    // Hvis brugeren skriver noget, der ikke er et tal, vil Number(userGuess) blive NaN (Not a Number).
    if (isNaN(userGuess)){ //isNaN(userGuess) tjekker, om inputtet er ikke et tal.
        console.log('Ugyldigt input! Indtast venligst et tal'); 
        continue; //Hvis det er ugyldigt, viser den en fejlmeddelelse og springer videre til næste gæt med continue;.
    }

    if (userGuess === targetNumber){
        console.log("Tillykke! Du gættede det rigtige tal!");
        alert("Tillykke! Du vandt spillet!");
        gameRunning = false; //gameRunning = false; gør, at while-løkken stopper, og spillet slutter.
    }


    else if (userGuess < targetNumber) {
        console.log("For lavt! Gæt et højere tal."); //Hvis gættet er for lavt, beder den brugeren om at gætte højere.
    } 
    
    
    else {
        console.log("For højt! Gæt et lavere tal."); //Hvis gættet er for højt, beder den brugeren om at gætte lavere.
    }
}

//Så længe gameRunning er true, vil spillet fortsætte.