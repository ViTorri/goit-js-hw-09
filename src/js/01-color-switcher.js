const startBtn = document.querySelector("button[data-start]");
console.log(startBtn);
const stoptBtn = document.querySelector("button[data-stop]");
console.log(stoptBtn);
const body = document.body;
console.log(body);

let timerId = null;

const onClickStartBtn = () => {
    startBtn.disabled = true;
    timerId = setInterval(() => {
        const color = getRandomHexColor();
        body.style.backgroundColor = color;
    }, 1000);
};

const onClickStopBtn = () => {
    startBtn.disabled = false;
    clearInterval(timerId);
}

startBtn.addEventListener("click", onClickStartBtn);
stoptBtn.addEventListener("click", onClickStopBtn);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}