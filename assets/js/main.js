let johnHeight = 170;
let johnAge = 22;
let pointsJohn;
let outputPointsJohn = document.getElementById("pointsJohn")

let meikeHeight = 168;
let meikeAge = 34;
let pointsMeike;
let outputPointsMeike = document.getElementById("pointsMeike")

let winner = document.getElementById("winner")

function game(){
    pointsJohn = johnAge * 5 + johnHeight;
    outputPointsJohn.innerHTML += pointsJohn;
    pointsMeike = meikeAge * 5 + meikeHeight;
    outputPointsMeike.innerHTML += pointsMeike;

    if(pointsJohn > pointsMeike){
        winner.innerHTML = "John hat gewonnen"
    }else if(pointsJohn < pointsMeike){
        winner.innerHTML = "Meike hat gewonnen"
    }else{
        winner.innerHTML = "Unentschieden"
    }
}
game();