document.getElementById("fullscreen").addEventListener("click", toggleFullScreen);

function toggleFullScreen() {

    
    var doc = window.document;
    var docEl = doc.documentElement;
  
    var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
  
    if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
      requestFullScreen.call(docEl);
      document.getElementById("fullscreen").innerHTML = `<i class="fas fa-compress-arrows-alt"></i>`;
    }
    else {
      cancelFullScreen.call(doc);
      document.getElementById("fullscreen").innerHTML = `<i class="fas fa-expand-arrows-alt"></i>`;
    }
  }

document.getElementById("card1").addEventListener("click", playSound1);
document.getElementById("card2").addEventListener("click", playSound2);
document.getElementById("card3").addEventListener("click", playSound3);
document.getElementById("card4").addEventListener("click", playSound4);
document.getElementById("card5").addEventListener("click", playSound5);
document.getElementById("card6").addEventListener("click", playSound6);

function playSound1(){
    let audio = new Audio("assets/sounds/peeing.ogg");
    audio.play();
    let thisCard = this
    this.classList.add("highlighted");

    //https://stackoverflow.com/questions/11103582/how-do-you-detect-when-html5-audio-has-finished-playing-more-than-once
    audio.addEventListener("ended", function(){
        audio.currentTime = 0;
        thisCard.classList.remove("highlighted");
        console.log("Ended");
   });

}

function isPlaying(audelem) { return !audelem.paused; }

function playSound2(){
    let audio = new Audio("assets/sounds/mum-mum-mum.ogg");
    audio.play();
    let thisCard = this
    this.classList.add("highlighted");

    audio.addEventListener("ended", function(){
        audio.currentTime = 0;
        thisCard.classList.remove("highlighted");
        console.log("Ended");
   });
}

function playSound3(){
    let audio = new Audio("assets/sounds/scraping-toast.ogg");
    audio.play();
    let thisCard = this
    this.classList.add("highlighted");

    audio.addEventListener("ended", function(){
        audio.currentTime = 0;
        thisCard.classList.remove("highlighted");
        console.log("Ended");
   });
}

function playSound4(){
    let audio = new Audio("assets/sounds/i-shit-myself.ogg");
    audio.play();
    let thisCard = this
    this.classList.add("highlighted");

    audio.addEventListener("ended", function(){
        audio.currentTime = 0;
        thisCard.classList.remove("highlighted");
        console.log("Ended");
   });

}

function playSound5(){
    let audio = new Audio("assets/sounds/mouse-clicking.ogg");
    audio.play();
    let thisCard = this
    this.classList.add("highlighted");

    audio.addEventListener("ended", function(){
        audio.currentTime = 0;
        thisCard.classList.remove("highlighted");
        console.log("Ended");
   });
}

function playSound6(){
    let audio = new Audio("assets/sounds/running-down-the-stairs.ogg");
    audio.play();
    let thisCard = this
    this.classList.add("highlighted");

    audio.addEventListener("ended", function(){
        audio.currentTime = 0;
        thisCard.classList.remove("highlighted");
        console.log("Ended");
   });
}