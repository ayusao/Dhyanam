
let inputMinutes = document.getElementById("inputMinutes");
let totalSeconds = 0;
let countdownEl = document.getElementById('countdown');
let intervalId;

function startTimer() {
    totalSeconds = inputMinutes.value * 60;
    intervalId = setInterval(updateCountdown, 1000);
}

function updateCountdown() {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    minutes = (minutes < 10) ? "0" + minutes : minutes;   
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    countdownEl.innerHTML = `${minutes}:${seconds}`;
    totalSeconds--;
    if (totalSeconds < 0) {
        clearInterval(intervalId);
        countdownEl.innerHTML = "Time's Up!";
    }
}
