const likeButtons = document.querySelectorAll(".like-btn");
const likedButtons = document.querySelectorAll(".liked-btn");
const like1Buttons = document.querySelectorAll(".like1-btn");
const like2Buttons = document.querySelectorAll(".like2-btn");
const like3Buttons = document.querySelectorAll(".like3-btn");

for (let i = 0; i < likeButtons.length; i++) {
  const btn = likeButtons[i];
  const wrapper = btn.parentElement;
  const countSpan = wrapper.children[1];

  btn.addEventListener("click", () => {
    let liked = btn.dataset.liked === "true";

    if (liked) {
      btn.textContent = "👍🏻";
      btn.dataset.liked = "false";
      countSpan.textContent = "89";
    } else {
      btn.textContent = "👍";
      btn.dataset.liked = "true";
      countSpan.textContent = "90";
    }
  });
}
// liked btn
for (let i = 0; i < likedButtons.length; i++) {
  const btn = likedButtons[i];
  const wrapper = btn.parentElement;
  const countSpan = wrapper.children[1];

  btn.addEventListener("click", () => {
    let liked = btn.dataset.liked === "true";

    if (liked) {
      btn.textContent = "👍🏻";
      btn.dataset.liked = "false";
      countSpan.textContent = "103";
    } else {
      btn.textContent = "👍";
      btn.dataset.liked = "true";
      countSpan.textContent = "104";
    }
  });
}
// 1
for (let i = 0; i < like1Buttons.length; i++) {
  const btn = like1Buttons[i];
  const wrapper = btn.parentElement;
  const countSpan = wrapper.children[1];

  btn.addEventListener("click", () => {
    let liked = btn.dataset.liked === "true";

    if (liked) {
      btn.textContent = "👍🏻";
      btn.dataset.liked = "false";
      countSpan.textContent = "97";
    } else {
      btn.textContent = "👍";
      btn.dataset.liked = "true";
      countSpan.textContent = "98";
    }
  });
}
// 2
for (let i = 0; i < like2Buttons.length; i++) {
  const btn = like2Buttons[i];
  const wrapper = btn.parentElement;
  const countSpan = wrapper.children[1];

  btn.addEventListener("click", () => {
    let liked = btn.dataset.liked === "true";

    if (liked) {
      btn.textContent = "👍🏻";
      btn.dataset.liked = "false";
      countSpan.textContent = "80";
    } else {
      btn.textContent = "👍";
      btn.dataset.liked = "true";
      countSpan.textContent = "81";
    }
  });
}
// 3 div
for (let i = 0; i < like3Buttons.length; i++) {
  const btn = like3Buttons[i];
  const wrapper = btn.parentElement;
  const countSpan = wrapper.children[1];

  btn.addEventListener("click", () => {
    let liked = btn.dataset.liked === "true";

    if (liked) {
      btn.textContent = "👍🏻";
      btn.dataset.liked = "false";
      countSpan.textContent = "109";
    } else {
      btn.textContent = "👍";
      btn.dataset.liked = "true";
      countSpan.textContent = "110";
    }
  });
}
// showing cars
const MainIMG = document.getElementById("MainIMG");
const smimg = document.getElementsByClassName("sm-img");
smimg[0].onclick = () => {
  MainIMG.src = smimg[0].src;
};
smimg[1].onclick = () => {
  MainIMG.src = smimg[1].src;
};
smimg[2].onclick = () => {
  MainIMG.src = smimg[2].src;
};
smimg[3].onclick = () => {
  MainIMG.src = smimg[3].src;
};
smimg[4].onclick = () => {
  MainIMG.src = smimg[4].src;
};
smimg[5].onclick = () => {
  MainIMG.src = smimg[5].src;
};
