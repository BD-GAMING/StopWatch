const display = document.getElementById("display")
let timer = null;
let starttime = 0;
let pastime = 0;
let isRunning = false



function start(){
    if(!isRunning){
        starttime = Date.now() - pastime
        timer = setInterval(update, 10);
        isRunning = true
    }
}

function stop(){
    if(isRunning){
        clearInterval(timer);
        pastime = Date.now() - starttime;
        isRunning = false;
    }
        
    
}

function reset(){
    clearInterval(timer);
    let starttime = 0;
    let pastime = 0;
    let isRunning = false;
    display.textContent = "00:00:00:00"

}

function update(){

    const currentTime = Date.now();
    pastime = currentTime - starttime;
    
    let hours = Math.floor(pastime / (1000 * 60 * 60 * 60));
    let minutes = Math.floor(pastime / (1000* 60 * 60) % 60);
    let seconds = Math.floor(pastime / 1000 % 60);
    let milliseconds = Math.floor(pastime % 1000 / 10);

    hours = String(hours).padStart(2,'0');
    minutes = String(minutes).padStart(2,'0');
    seconds = String(seconds).padStart(2,'0');
    milliseconds = String(milliseconds).padStart(2,'0');

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
