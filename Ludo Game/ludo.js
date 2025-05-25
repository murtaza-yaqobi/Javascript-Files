const ludoNumber = {
  1: "⚀",
  2: "⚁",
  3: "⚂",
  4: "⚃",
  5: "⚄",
  6: "⚅",
};

function ludoNumberOnClick() {
  const dice = document.getElementById("dice");
  const result = document.getElementById("result");

  dice.classList.add("rotate-180");
  setTimeout(() => {
    const number = Math.floor(Math.random() * 6) + 1;
    dice.textContent = ludoNumber[number];
    result.textContent = `Your Ludo number ${number}`;
    dice.classList.remove("rotate-180");
  }, 500);
}
