document.getElementById("card1").addEventListener("click", playSound1);
document.getElementById("card2").addEventListener("click", playSound2);
document.getElementById("card3").addEventListener("click", playSound3);
document.getElementById("card4").addEventListener("click", playSound4);
document.getElementById("card5").addEventListener("click", playSound5);
document.getElementById("card6").addEventListener("click", playSound6);

function playSound1(){
    let audio = new Audio("assets/sounds/peeing.ogg");
    audio.play();
}

function playSound2(){
    let audio = new Audio("assets/sounds/mum-mum-mum.ogg");
    audio.play();
}

function playSound3(){
    let audio = new Audio("assets/sounds/scraping-toast.ogg");
    audio.play();
}

function playSound4(){
    let audio = new Audio("assets/sounds/i-shit-myself.ogg");
    audio.play();
}

function playSound5(){
    let audio = new Audio("assets/sounds/mouse-clicking.ogg");
    audio.play();
}

function playSound6(){
    let audio = new Audio("assets/sounds/running-down-the-stairs.ogg");
    audio.play();
}