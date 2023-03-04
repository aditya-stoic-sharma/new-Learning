const startStopBtn = document.querySelector('#startStopBtn');
const reserBtn = document.querySelector('#resetBtn');

let secound = 0;
let minutes = 0;
let hours = 0;

let leadingsecound = 0;
let leadingminutes = 0;
let leadinghours = 0;

let timerStatus = 'stopped';
let timeInerval = null;
function stopWatch(){
    secound++;

    if(secound/60 === 1){
        secound = 0;
        minutes++;

        if(minutes/60 === 1){
            minutes = 0;
            hours++;
        }
    }

    if(secound<10){
        leadingsecound = "0" + secound.toString();
    }else{
        leadingsecound = secound;
    }
    if(minutes<10){
        leadingminutes = "0" + minutes.toString();
    }else{
        leadingminutes = minutes;
    }
    if(secound<10){
        leadinghours = "0" + hours.toString();
    }else{
        leadinghours = hours;
    }


    let displayTimer = document.getElementById('timer').innerText = leadinghours + ":" + leadingminutes +":" + leadingsecound;
}

// window.setInterval(stopWatch, 1000);

startStopBtn.addEventListener('click' , function(){
    if(timerStatus == 'stopped'){
        timeInerval  = window.setInterval(stopWatch, 1000);
        document.getElementById('startStopBtn') .innerHTML = `<i class = "fa-solid fa-pause" id = "pause"></i>`;
        timerStatus = 'started';
    }else{
        window.clearInterval(timeInerval);
        document.getElementById('startStopBtn').innerHTML =    `<i class = "fa-solid fa-play" id = "play" ></i>`;
        timerStatus = 'stopped';
    }
});

resetBtn.addEventListener('click', function(){
    window.clearInterval(timeInerval);
    secound = 0;
    minutes = 0;
    hours = 0;

    document.getElementById('timer').innerHTML = "00:00:00";
})