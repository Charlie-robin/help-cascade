let seconds = 0, minutes = 0, hours = 0, timeSwitch, timeInput;

const timeCounter = () => {
    getTimeInput();
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

const startTime = () => timeSwitch = setTimeout(timeCounter, 200);
const stopTime = () => clearTimeout(timeSwitch);
const getTimeInput = () => timeInput = document.getElementById("time-input").value; 
const compareTimeInput = () => (timeInput = parseInt(timeInput)) === minutes ? stopTime() : null;

const displayTime = () => {
    const displaySeconds = document.getElementById("seconds").innerHTML = seconds;
    const displayMinutes = document.getElementById("minutes").innerHTML = minutes;
    const displayHours = document.getElementById("hours").innerHTML = hours;
}









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