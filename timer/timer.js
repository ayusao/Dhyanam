
let inputMinutes = document.getElementById("inputMinutes");
let totalSeconds = 0;
let isPaused = false;

const countdownEl = document.getElementById('countdown');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');
let intervalId;
function updateCountdown() {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    minutes = (minutes < 10) ? "0" + minutes : minutes;   
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    countdownEl.innerHTML = `${minutes}:${seconds}`;
    totalSeconds--;
    if (totalSeconds < 0) {
        clearInterval(intervalId);
        countdownEl.innerHTML = "YAY! YOU DID IT";
    }
}
function startTimer() {
    totalSeconds = inputMinutes.value * 60;
    intervalId = setInterval(updateCountdown, 1000);
}
function pauseResumeTimer() {
    if (!isPaused) {
        clearInterval(intervalId);
        isPaused = true;
        document.getElementById("pauseResume").innerHTML = "Resume";
    } else {
        intervalId = setInterval(updateCountdown, 1000);
        isPaused = false;
        document.getElementById("pauseResume").innerHTML = "Pause";
    }
}

function resetTimer(){
    clearInterval(intervalId);
    totalSeconds = inputMinutes.value * 60;
    countdownEl.innerHTML = `${inputMinutes.value}:00`;
}