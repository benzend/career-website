const nav = document.querySelector("nav");
const titleWordSwap = document.querySelector("#title-word-swap");
const references1 = document.querySelector("#references1");
const references2 = document.querySelector("#references2");

// Variables
const titleWords = ["DESCISION", "CAREER", "FUTURE"];

// Event Handlers
function scrollHandler() {
  console.log(pageYOffset);
  if (pageYOffset > 0) {
    nav.classList.add("transparent");
  }
  if (pageYOffset > 300) {
    references1.classList.add("appear");
  }
  if (pageYOffset > 700) {
    references2.classList.add("appear");
  }
}

let i = 0;

setInterval(() => {
  titleWordSwap.classList.remove("appear");
  setTimeout(() => {
    titleWordSwap.innerHTML = titleWords[i];
    titleWordSwap.classList.add("appear");
  }, 1000);

  i++;
  if (i === 3) {
    i = 0;
  }
}, 3000);
