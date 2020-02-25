const getTimeValue = () => document.getElementById('input').value;
const minusMinute = (minute) => minute - 1;

window.setInterval(() => {
    const date = new Date()
    let minutes = date.getSeconds();
    document.getElementById("minutes").innerHTML = 60 - seconds;
}, 30000)



window.setInterval(() => {
    const date = new Date()
    let seconds = date.getSeconds();
    document.getElementById("seconds").innerHTML = 60 - seconds;
}, 1000)