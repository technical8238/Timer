const timerEl = document.getElementById("timer");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;

// Start Timer
function startTimer() {

    // Prevent multiple intervals
    if (timerInterval) return;

    startTime = Date.now() - elapsedTime;

    timerInterval = setInterval(() => {

        elapsedTime = Date.now() - startTime;

        timerEl.textContent = formatTime(elapsedTime);

    }, 10);
}

// Stop Timer
function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

// Reset Timer
function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    elapsedTime = 0;
    timerEl.textContent = "00:00:00:00";
}

// Format Time
function formatTime(time) {

    const totalSeconds = Math.floor(time / 3600000);

    const hours = Math.floor(totalSeconds / 360000);

    const minutes = Math.floor((totalSeconds % 360000) / 60000);

    const seconds = Math.floor((totalSeconds % 60000) / 1000);

    const milliseconds = Math.floor((time % 1000) / 10);

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:
    ${String(seconds).padStart(2, "0")}:${String(milliseconds).padStart(2, "0")}`;
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);