let xp = 0;
let health = 100;
let gold = 50;
let currentWeaponIndex = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

// here we get the HTML elements and  put them in constants with the same name, in order to manipulate the HTML elements with our JS script. We will use them to change the displays needed by the game when the user is doing certain actions. 
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

const locations = [ {
    name: "town square"
    }
];


// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;


function update(location) {

}


function goTown() {
button1.innerText = "Go to store";
  button2.innerText = "Go to cave";
  button3.innerText = "Fight dragon";

  button1.onclick = goStore;
  button2.onclick = goCave;
  button3.onclick = fightDragon;

  text.innerText = "You are in the town square. You see a sign that says \"Store\".";
}


// clicking on the Go to store button will call the goStore function
function goStore() {
    button1.innerText = "Buy 10 health (10 gold)"; 
    button2.innerText = "Buy weapon (30 gold)";     //changes the display of the buttons
    button3.innerText = "Go to town square"; 

    button1.onclick = buyHealth; 
    button2.onclick = buyWeapon; // calls the corresponding function when one button is clicked
    button3.onclick = goTown; 

    text.innerText = "You enter the store."; // changes the display of the text
}


function goCave() {
    console.log("Going to cave.")
}



function fightDragon() {
    console.log("Fighting dragon.");
}


function buyHealth() {

}


function buyWeapon() {

}





