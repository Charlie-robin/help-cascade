let seconds = 0, minutes = 0, hours = 0,stepCounter= -1, timeSwitch, timeInput;
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
const clearTime = () => {
    seconds = 0;
    minutes = 0; 
    hours = 0;
    timeInput = 0;
}

const compareTimeInput = () => timeInput === minutes ? timeUp() : null;
const displayTime = () => {
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("entered-value").innerHTML = timeInput;
}

const hideModal = () => document.getElementById("modal").style.display = "none";
const showModal = () => document.getElementById("modal").style.display = "flex";

const hideTimer = () => document.getElementById("timer").style.display = "block";
const showTimer = () => document.getElementById("timer").style.display = "block";

const startTime = () => timeSwitch = setTimeout(timeCounter, 100);
const stopTime = () => clearTimeout(timeSwitch);

const togglePauseButton = (buttonType) => buttonType === "pause" ? document.getElementById('pause-go-button').innerHTML = `<button onclick="togglePauseButton('go'), stopTime()">Pause</button>`:  document.getElementById('pause-go-button').innerHTML = `<button onclick="togglePauseButton('pause'),startTime()">Go</button>`;
togglePauseButton("pause");

class StepsContent {
    constructor(step,stepNumber, text,img,quote,){
        this.step = step;
        this.text = text;
        this.img = img;
        this.quote = quote;
        this.stepNumber = stepNumber;
    }
    displayContent() {
        const markUp = 
        `
        <div>
            <h3>${this.step}</h3>
            <p>${this.text}</p>
        </div>

        <div id="inspiration">
            <img src="${this.img}" alt="">
            <blockquote>
                "${this.quote}"
            </blockquote>
        </div>
        `;
        this.clearContent()
        this.highLightStep()
        document.getElementById('content').insertAdjacentHTML("afterbegin", markUp)
    }
    clearContent() {
        document.getElementById('content').innerHTML = "";
    }
    highLightStep() {
        document.getElementById("progress").querySelectorAll("p")[this.stepNumber].classList.add("highlight");
    }
    unHighLightStep() {
        document.getElementById("progress").querySelectorAll("p")[this.stepNumber].classList.remove("highlight");
    }
}

const lorem = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi maiores repellat aperiam dolorem pariatur dolores amet voluptatem temporibus provident, rerum corporis molestiae magni? Vitae impedit quisquam veniam ad ipsum cumque?"

const stepsArray =[];
stepsArray.push(new StepsContent("Self",0,lorem,"./resources/img/self-min.jpg","Computers are good at following instructions, but not at reading your mind."));
stepsArray.push(new StepsContent("Google",1,lorem,"./resources/img/google-min.jpg","Programming is usually taught by examples."));
stepsArray.push(new StepsContent("Duck",2,lorem,"./resources/img/duck-min.jpg","A friend when you’re in hot water."));
stepsArray.push(new StepsContent("Team",3,lorem,"./resources/img/team-min.jpg","Understanding is gained by sharing knowledge, not hoarding it."));
stepsArray.push(new StepsContent("Coaches",4,lorem,"./resources/img/coach-min.jpg","The way to achieve your own success is to be willing to help somebody else get it first."));

const updateContentSection = () => {
    stepCounter > -1 ? stepsArray[stepCounter].unHighLightStep() : null;
    stepCounter++
    stepsArray[stepCounter].displayContent();
}

const startButton = () => {
hideModal()
getTimeInputs()
showTimer()
startTime()
updateContentSection()
}

const timeUp = () => {
    stopTime();
    clearTime();
    showModal();
}
