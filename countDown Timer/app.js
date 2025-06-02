const timer = document.getElementById("main_timer");
const showTimer = document.getElementById("show_timer");
const title = document.getElementById("title");
const btn = document.getElementById("btn_start");
let timerInterval;
btn.addEventListener("click", () => {
  timer.classList.add("hidden");
  showTimer.classList.remove("hidden");
  showTimer.classList.add("flex");

  const choosedTime = document.getElementById("time_date");
  const target = new Date(choosedTime.value);
  timerInterval = setInterval(() => {
    const date = new Date();
    let diffrence = date - target;
    console.log(diffrence);
    if (isNaN(diffrence)) {
      return;
    }
    if (diffrence <= 0) {
      return;
    }
    let seconds = (diffrence / 1000) % 60;
    let minuts = (diffrence / 1000 / 60) % 60;
    let hours = (diffrence / (1000 * 60 * 60)) % 24;
    let days = diffrence / (1000 * 60 * 60 * 24);
    document.getElementById("seconds").textContent = seconds;
    document.getElementById("minuts").textContent = minuts;
    document.getElementById("hours").textContent = hours;
    document.getElementById("days").textContent = days;
  }, 1000);
});
