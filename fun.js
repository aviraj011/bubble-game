
var timer = 60;
var score = 0;
var rn = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
function makeBubble(){
var clutter = "";
for(var i=1;i<=69;i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;

}

document.querySelector("#pbtm").innerHTML = clutter;
}
function runTimer(){
    var timerint =setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML =`<h1>Game Over</h1>`;
        }
    },1000);

}
function getNewHit(){
    rn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = rn;
}
document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum === rn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
});
runTimer();
makeBubble();
getNewHit();
increaseScore();