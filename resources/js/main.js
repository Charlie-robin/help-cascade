let seconds = 0, minutes = 0, hours = 0, clock;


const add = () => {
    seconds++
    if (seconds >= 60) {
        seconds = 0;
        minutes++
    }
    if (seconds >= 60) {
        minutes = 0;
        hours++
    }
    timer();
    console.log(seconds);
}
const timer = () => clock = setTimeout(add, 1000);

const stop = () => clearTimeout(clock);














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