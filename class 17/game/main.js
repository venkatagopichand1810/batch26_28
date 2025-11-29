const cards = document.querySelectorAll(".card")
const imageCard = document.getElementsByClassName("card-back")
const imageCard2 = document.getElementsByClassName("card-front")
const win = document.getElementById("win");
const restart = document.getElementById("restart");
const moves = document.getElementById("move-count");

let move = 0;
let winCount = 0; 



const image = [
    {
        img: "images/1.jpg"
    },

    {
        img: "images/2.png"
    },

    {
        img: "images/3.jpg"
    },
    {
        img: "images/4.jpg"
    },
        {
        img: "images/1.jpg"
    },

    {
        img: "images/2.png"
    },

    {
        img: "images/3.jpg"
    },
    {
        img: "images/4.jpg"
    }

]