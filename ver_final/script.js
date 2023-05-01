// Add event listeners to each half of the main content section
const leftHalf = document.querySelector(".left-half");
const rightHalf = document.querySelector(".right-half");

leftHalf.addEventListener("mouseover", () => {
  leftHalf.style.backgroundColor = "#161923";
  leftHalf.style.color = "#fff";
});

leftHalf.addEventListener("mouseout", () => {
  leftHalf.style.backgroundColor = "#5f6b95";
  leftHalf.style.color = "#fff";
});

rightHalf.addEventListener("mouseover", () => {
  rightHalf.style.backgroundColor = "#232016";
  rightHalf.style.color = "#fff";
});

rightHalf.addEventListener("mouseout", () => {
  rightHalf.style.backgroundColor = "#95895f";
  rightHalf.style.color = "#fff";
});

