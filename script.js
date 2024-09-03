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
    } else if (energy === 0) {
        fungusElement.classList.remove("walk");
        fungusElement.classList.add("jump");
    }
    healthElement.innerText = fungalHealth;
    document.getElementById("hp-meter").value = fungalHealth;
    energyElement.innerText = energy;
    document.getElementById("ap-meter").value = energy;
}

function buttonClickArcane(event) {
    if (energy < 18) {
        event.target.classList.add("disabled")
    } else {
        fungalHealth -= 14;
        energy -= 18;
    }
    renderScreen();
}

