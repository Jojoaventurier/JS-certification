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

const weapons = [
    {
      name: "stick",
      power: 5
    },
    {
      name: "dagger",
      power: 30
    },
    {
      name: "claw hammer",
      power: 50
    },
    {
      name: "sword",
      power: 100
    }
];

const locations = [
    {
      name: "town square",
      "button text": ["Go to store", "Go to cave", "Fight dragon"],
      "button functions": [goStore, goCave, fightDragon],
      text: "You are in the town square. You see a sign that says \"Store\"." 
    },
    {
      name: "store",
      "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
      "button functions": [buyHealth, buyWeapon, goTown],
      text: "You enter the store."
    },
    {
        name: "cave",
        "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
        "button functions": [fightSlime, fightBeast, goTown],
        text: "You enter the cave. You see some monsters."
      }
];


// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;
// clicking on the Go to store button will call the goStore function etc.


function update(location) {
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1]; // changes the dislay of the buttons
    button3.innerText = location["button text"][2];

    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1]; // calls the corresponding function when button is clicked
    button3.onclick = location["button functions"][2];

    text.innerText = location.text; // changes the display of the text
}


function goTown() {
    update(locations[0]);
}


function goStore() {
    update(locations[1]);
}


function goCave() {
    update(locations[2]);
}

function fightSlime() {

}
function fightBeast() {
  
}



function fightDragon() {
    console.log("Fighting dragon.");
}


function buyHealth() {
    if (gold >= 10) {
    gold -= 10;
    health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;
    } else {
        text.innerText = "You do not have enough gold to buy health."
      }
}


function buyWeapon() {

}





