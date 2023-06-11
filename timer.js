const button = document.querySelector("#btn");
let timerId;
const timer = 25;
let amountTime = timer * 60;
function startTimer() {
    const countdown = document.querySelector("#countdown");
    let minutes = Math.floor(amountTime / 60);
    let seconds = amountTime % 60;

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    countdown.textContent = `${minutes} : ${seconds}`;
    amountTime--;

    if (amountTime < 0) {
        stopTimer();
        amountTime = 0;
        document.querySelector("#player").play();
    }

    function stopTimer() {
        clearInterval(timerId);
    }
}
button.addEventListener("click", function () {
    document.querySelector("#player").play();
    document.querySelector("#player").pause();
    function start() {
        timerId = setInterval(function () {
            startTimer();

        }, 1000);
    }
    start();
},{once:true});
