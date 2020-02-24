



window.setInterval(() => {
    const timer = document.getElementById("input").value
    const date = new Date()
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    document.getElementById("minutes").innerHTML = timer - minutes;
    document.getElementById("seconds").innerHTML = (timer*60) - seconds;
}, 1000)