const questions = [
  {
    number: 1,
    question: "What does HTML stands for?",
    options: [
      "Hyper Text Markup Language",
      "Hyperlink and Text Markup Language",
      "Home Tools Markup Language",
      "Hyper Transfar Markup Language",
    ],
    correct: 0,
  },
  {
    number: 2,
    question: "Which CSS property is use for adding color text?",
    options: ["text-color", "font-color", "color", "text-style"],
    correct: 2,
  },
  {
    number: 3,
    question: "Which is the correct array?",
    options: [
      "[1-2-4-5-7-9-0-10",
      "12345678910",
      "[1,2,'text',5,7,8,9,10",
      "1.2.4.5.6.7.9.0.7.6.10",
    ],
    correct: 2,
  },
  {
    number: 4,
    question: "Which is the correct tag for javascript?",
    options: ["script", "javascript", "js", "link"],
    correct: 0,
  },
  {
    number: 5,
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheet",
      "Creative Style sheet",
      "Cascading Style Sheet",
      "Colorful Style Sheet",
    ],
    correct: 2,
  },
  {
    number: 6,
    question:
      "Which method is used to select an element by its ID in Javascript?",
    options: [
      "document.qierySelector()",
      "document.getElementById()",
      "document.getElementByClass()",
      "document.findElement()",
    ],
    correct: 1,
  },
];
let POINT = 0;

const nextBtn = document.getElementById("nextBtn");
let indexNumber = 0;
const divParent = document.getElementById("divParent");
function firstQuestion() {
  const question = document.createElement("h1");
  question.textContent =
    questions[indexNumber].number + ". " + questions[indexNumber].question;
  const divQ = document.getElementById("divQuestion");
  divQ.append(question);
  for (let option of questions[0].options) {
    const Divoption = document.createElement("div");
    Divoption.innerHTML = `
    <h1>${option}</h1>`;
    Divoption.className = "options";
    Divoption.addEventListener("click", () => {
      if (
        option ===
        questions[indexNumber].options[questions[indexNumber].correct]
      ) {
        POINT += 2;
        Divoption.classList.add("correct-answer");
      }
    });
    const divOptions = document.getElementById("options");
    divOptions.append(Divoption);
  }
}
firstQuestion();
nextBtn.addEventListener("click", () => {
  indexNumber++;
  if (indexNumber > 5) {
    divParent.innerHTML = "";
    let result = POINT > 10 ? "You Passed" : "You Felid";
    divParent.innerHTML = `
    <h1>
    You got ${POINT} ${result}
    </h1>
    `;
  }
  const divQ = document.getElementById("divQuestion");
  divQ.innerHTML = "";
  const divOptions = document.getElementById("options");
  divOptions.innerHTML = "";
  const question = document.createElement("h1");
  question.textContent =
    questions[indexNumber].number + ". " + questions[indexNumber].question;

  divQ.append(question);
  for (let option of questions[indexNumber].options) {
    const Divoption = document.createElement("div");
    Divoption.innerHTML = `
    <h1>${option}</h1>`;
    Divoption.className = "options";

    divOptions.append(Divoption);
  }
});
