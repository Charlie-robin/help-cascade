let seconds = 0, minutes = 0, hours = 0, timeSwitch, timeInput;
const inputHours = document.getElementById("hours"), inputMinutes = document.getElementById("minutes");

const timeCounter = () => {
    displayTime();
    seconds++
    if (seconds >= 60) {
        seconds = 0;
        minutes++ 
    }
    else if (seconds >= 60) {
        minutes = 0;
        hours++
    }
    startTime();
    compareTimeInput();
}

const addTime = (type) => type === "hours" ? inputHours.innerHTML++ : inputMinutes.innerHTML++;
const minusTime = (type) => type === "hours" ? inputHours.innerHTML-- :  inputMinutes.innerHTML--;

const getTimeInputs = () => {
    const minutes = parseInt(inputMinutes.innerHTML);
    const hours = parseInt(inputHours.innerHTML*60);
    timeInput = minutes + hours;
}

const compareTimeInput = () => timeInput === minutes ? stopTime() : null;
const displayTime = () => {
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("entered-value").innerHTML = timeInput;
}

const hideModal = () => document.getElementById("modal").style.display = "none";
const showModal = () => document.getElementById("modal").style.display = "block";

const hideTimer = () => document.getElementById("timer").style.display = "block";
const showTimer = () => document.getElementById("timer").style.display = "block";

const startTime = () => timeSwitch = setTimeout(timeCounter, 1000);
const stopTime = () => clearTimeout(timeSwitch);

const togglePauseButton = (buttonType) => buttonType === "pause" ? document.getElementById('pause-go-button').innerHTML = `<button onclick="togglePauseButton('go'), stopTime()">Pause</button>`:  document.getElementById('pause-go-button').innerHTML = `<button onclick="togglePauseButton('pause'),startTime()">Go</button>`;
togglePauseButton("pause");






// const updateTimeValue = (update) => document.getElementById('input').value = update;
// const minusMinute = (minute) => minute -= 1;
// let getTimeValue = document.getElementById('input').value;


// const minuteTimer = () => {
//     let timeValue = getTimeValue();
//     let minusMinuteTimeValue = minusMinute(timeValue);
//     updateTimeValue(minusMinuteTimeValue);
//     document.getElementById("minutes").innerHTML = minusMinuteTimeValue;
// };

// const secondTimer = () => {
//         const date = new Date()
//         let seconds = date.getSeconds();
//         document.getElementById("seconds").innerHTML = 60 - seconds;  
// };


// const seconds = setInterval(secondTimer, 1000);
// const minutes = setInterval(minuteTimer, 1000);

// const stop = () => {
//     clearInterval(seconds);
//     clearInterval(minutes);
// }






// window.setInterval(() => {
//     const date = new Date()
//     let seconds = date.getSeconds();
//     document.getElementById("seconds").innerHTML = 60 - seconds;
// }, 1000)

// const minuteTimer = () => {
//     window.setInterval(() => {
//         let timeValue = getTimeValue();
//         let minusMinuteTimeValue = minusMinute(timeValue);
//         updateTimeValue(minusMinuteTimeValue);
//         document.getElementById("minutes").innerHTML = minusMinuteTimeValue;
//     }, 1000)
// };