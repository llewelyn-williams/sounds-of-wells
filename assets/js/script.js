document.getElementById("card1").addEventListener("click", playSound);

function playSound(){
    let audio = new Audio("assets/sounds/sound1.ogg");
    audio.play();
    console.log("Hello from click function");
}