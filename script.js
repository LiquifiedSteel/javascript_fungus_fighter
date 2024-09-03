// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;
let fungalHealth = 100;
let energy = 100;


function onReady() {
    console.log("Ready to go!")
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}


onReady()

setInterval(function regen() {
    if (fungalHealth === 0) {
        return true;
    } else {
        if (fungalHealth < 50) {
            if (energy > 12) {
                fungalHealth += 1;
                renderScreen();
            };
        };
    };
}, 1000);

function renderScreen(){
    const healthElement = document.getElementById("health");
    const energyElement = document.getElementById("energy");
    const fungusElement = document.getElementById("fungus");

    if (fungalHealth < 0) {
        fungalHealth = 0;
    }
    if (energy < 0) {
        energy = 0;
    }
    if (fungalHealth === 0) {
        fungusElement.classList.remove("walk");
        fungusElement.classList.add("dead");
    } else if (energy < 12) {
        fungusElement.classList.remove("walk");
        fungusElement.classList.add("jump");
    }
    healthElement.innerText = fungalHealth;
    document.getElementById("hp-meter").value = fungalHealth;
    energyElement.innerText = energy;
    document.getElementById("ap-meter").value = energy;
}

function buttonClickArcane(event) {
    if (energy < 12) {
        event.target.classList.add("disabled")
    } else {
        fungalHealth -= 14;
        energy -= 12;
    }
    renderScreen();
}

function buttonClickEntangle(event) {
    if (energy < 23) {
        event.target.classList.add("disabled")
    } else {
        fungalHealth -= 9;
        energy -= 23;
    }
    renderScreen();
}

function buttonClickBlade(event) {
    if (energy < 38) {
        event.target.classList.add("disabled")
    } else {
        fungalHealth -= 47;
        energy -= 38;
    }
    renderScreen();
}

function buttonClickFire(event) {
    if (energy < 33) {
        event.target.classList.add("disabled")
    } else {
        fungalHealth -= 25;
        energy -= 33;
    }
    renderScreen();
}
