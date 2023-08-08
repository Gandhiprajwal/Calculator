let string = "";
let buttons = document.querySelectorAll(".btn");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "Del") {
      string = string.slice(0, -1);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "+/-") {
      string = string + "-";
      document.querySelector("input").value = string;
    } else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});

const light = document.querySelector(".sec");
const toggle = document.querySelector(".light-btn");
const dark = document.querySelector(".dark-btn");
toggle.onclick = function () {
    light.classList.add("light-mode");
};
dark.onclick = function () {
  light.classList.remove("light-mode");
  light.classList.add("dark-mode");
};