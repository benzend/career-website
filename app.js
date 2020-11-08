const nav = document.querySelector("nav");
const titleWordSwap = document.querySelector("#title-word-swap");
const references1 = document.querySelector("#references1");
const references2 = document.querySelector("#references2");
const proj1 = document.querySelector("#proj1");

// Variables
const titleWords = ["DESCISION", "CAREER", "FUTURE"];

// Event Handlers
function scrollHandler() {
  // console.log(pageYOffset);
  if (pageYOffset > 0) {
    nav.classList.add("transparent");
  }
  if (pageYOffset > 300) {
    references1.classList.add("appear");
  }
  if (pageYOffset > 700) {
    references2.classList.add("appear");
  }

  // Project 1
  if (pageYOffset > 1700 && pageYOffset < 1900) {
    proj1.classList.add("rotate");
    proj1.firstElementChild.classList.remove("appear");
    proj1.lastElementChild.classList.add("appear");
  } else {
    proj1.classList.remove("rotate");
    proj1.firstElementChild.classList.add("appear");
    proj1.lastElementChild.classList.remove("appear");
  }
  // Project 2
  //   if (pageYOffset > 1700 && pageYOffset < 1850) {
  //     proj2.classList.add("rotate");
  //     setTimeout(() => {
  //       proj2.firstElementChild.classList.remove("appear");
  //     }, 200);
  //   } else {
  //     proj2.classList.remove("rotate");
  //     setTimeout(() => {
  //       proj2.firstElementChild.classList.add("appear");
  //     }, 200);
  //   }
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
