let seconds = 0,
  minutes = 0,
  hours = 0,
  stepCounter = 0,
  timeSwitch,
  timeInput;
const inputHours = document.getElementById("hours"),
  inputMinutes = document.getElementById("minutes");

const timeCounter = () => {
  displayTime();
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  } else if (seconds >= 60) {
    minutes = 0;
    hours++;
  }
  startTime();
  compareTimeInput();
};

const addTime = (type) =>
  type === "hours" ? inputHours.innerHTML++ : inputMinutes.innerHTML++;

const minusTime = (type) => {
  if (type === "hours" && inputHours.innerHTML > 0) {
    inputHours.innerHTML--;
  } else if (type !== "hours" && inputMinutes.innerHTML > 0) {
    inputMinutes.innerHTML--;
  }
};

const getTimeInputs = () => {
  const minutes = parseInt(inputMinutes.innerHTML);
  const hours = parseInt(inputHours.innerHTML * 60);
  timeInput = minutes + hours;
};

const clearTime = () => {
  seconds = 0;
  minutes = 0;
  hours = 0;
  timeInput = 0;
};

const compareTimeInput = () => (timeInput === minutes ? timeUp() : null);

const displayTime = () => {
  document.getElementById("seconds").innerHTML = seconds;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("entered-value").innerHTML = timeInput;
};

const hideModal = () =>
  (document.getElementById("modal").style.display = "none");
const showModal = () =>
  (document.getElementById("modal").style.display = "flex");

const hideTimer = () =>
  (document.getElementById("timer").style.display = "block");
const showTimer = () =>
  (document.getElementById("timer").style.display = "block");

const startTime = () => (timeSwitch = setTimeout(timeCounter, 1000));
const stopTime = () => clearTimeout(timeSwitch);

const togglePauseButton = (buttonType) =>
  buttonType === "pause"
    ? (document.getElementById(
        "pause-go-button"
      ).innerHTML = `<button onclick="togglePauseButton('go'), stopTime()">Pause</button>`)
    : (document.getElementById(
        "pause-go-button"
      ).innerHTML = `<button onclick="togglePauseButton('pause'),startTime()">Go</button>`);
togglePauseButton("pause");

class StepsContent {
  constructor(step, stepNumber, text, img, quote) {
    this.step = step;
    this.text = text;
    this.img = img;
    this.quote = quote;
    this.stepNumber = stepNumber;
  }
  displayContent() {
    const markUp = `
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
    this.clearContent();
    this.highLightStep();
    document.getElementById("content").insertAdjacentHTML("afterbegin", markUp);
  }
  clearContent() {
    document.getElementById("content").innerHTML = "";
  }
  highLightStep() {
    document
      .getElementById("progress")
      .querySelectorAll("p")
      [this.stepNumber].classList.add("highlight");
  }
  unHighLightStep() {
    document
      .getElementById("progress")
      .querySelectorAll("p")
      [this.stepNumber].classList.remove("highlight");
  }
}


const selfContent =
  "Lets put your experience, logic and luck to work. Take off the blinkers, step away from the problem, get a notepad and write what you want to do down. Divide first and then conquer the problem with small manageable steps.  Avoid unnecessary complexity! Sometimes solutions are simple, getting it working and then refactor! ";
const googleContent =
  "Google is your best friend don't deny it, he has got your back.  Simplify your search. MDN, W3, CSStricks are great resources for syntax. Stackoverflow is a great resource but watch out for rabbit holes. Search for real examples of what you want. You have Devtools use them. Hit CTRL SHIFT I and Steal like an artist!";
const duckContent =
  "Its time to get verbal. Say your problem out loud to a colleague or to an inanimate object, ask permission first. Describe your problem or code line by line out loud to them. This forces a different evaluation from a different perspective as you are now a teacher educating someone. ";
const teamContent =
  "Its time to ask for help. There is nothing wrong with asking for help, no one is perfect and at some point we all need it. You have tried everything you can up until now and if you don't it almost becomes counterproductive. Has anyone else done anything similar? Is their anyone who you have helped previously?";
const coachContent =
  "Its time to ask the wizards. You have done everything you can there is nothing wrong with this. In fact they respect you even more for your tenacity and commitment to solving it yourself. Chapeau to you!";

const stepsArray = [];
stepsArray.push(
  new StepsContent(
    "Self",
    0,
    selfContent,
    "./resources/img/self-min.jpg",
    "Computers are good at following instructions, but not at reading your mind."
  )
);
stepsArray.push(
  new StepsContent(
    "Google",
    1,
    googleContent,
    "./resources/img/google-min.jpg",
    "Programming is usually taught by examples."
  )
);
stepsArray.push(
  new StepsContent(
    "Duck",
    2,
    duckContent,
    "./resources/img/duck-min.jpg",
    "A friend when you’re in hot water."
  )
);
stepsArray.push(
  new StepsContent(
    "Team",
    3,
    teamContent,
    "./resources/img/team-min.jpg",
    "Understanding is gained by sharing knowledge, not hoarding it."
  )
);
stepsArray.push(
  new StepsContent(
    "Coaches",
    4,
    coachContent,
    "./resources/img/coach-min.jpg",
    "To achieve your own success is to be willing to help somebody else get it."
  )
);

const updateContentSection = () => {
  stepCounter >= 5 ? (stepCounter = 0) : null;
  stepsArray.forEach((el) => el.unHighLightStep());
  stepsArray[stepCounter].displayContent();
  stepCounter++;
};

stepsArray[0].displayContent();

const startButton = () => {
  hideModal();
  getTimeInputs();
  showTimer();
  startTime();
  updateContentSection();
};

const timeUp = () => {
  alert(
    "Times up, its time to escalate. Have you considered having a little break?"
  );
  stopTime();
  clearTime();
  showModal();
};

const resetContent = () => {
  stepCounter = 0;
  timeUp();
};
