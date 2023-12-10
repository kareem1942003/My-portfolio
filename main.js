let menu1 = document.getElementById("menu1");
let xmenu = document.getElementById("xmenu");
let menu2 = document.getElementById("menu2");

menu1.onclick = function () {
  menu2.style.height = "230px";
  menu1.style.display = "none";
  xmenu.style.display = "block";
};
xmenu.onclick = function () {
  menu2.style.height = "0";
  menu1.style.display = "block";
  xmenu.style.display = "none";
};
menu2.onclick = function () {
  menu2.style.height = "0";
  menu1.style.display = "block";
  xmenu.style.display = "none";
};

let down = document.getElementById("down");
let up = document.getElementById("up");

down.onclick = function () {
  window.scrollTo(0, 800);
};

up.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

let siction = document.getElementById("skills");
let spans = document.querySelectorAll(".skills .color span");
let card = document.querySelectorAll(".projects .pro .card");
let projects = document.querySelector(".projects");
let aboutmeContainer = document.getElementById("aboutMe");
let aboutCard = document.querySelector(".peCard");
let aniImg = document.querySelector(".aboutMe .about .imag img");

window.onscroll = function aniSkills() {
  if (window.scrollY >= 800) {
    up.style.opacity = "100%";
  } else {
    up.style.opacity = "0%";
  }
  if (window.scrollY >= siction.offsetHeight - 200) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  if (window.scrollY >= projects.offsetTop - 400) {
    card.forEach((ani) => {
      ani.style.animation = "up 1.9s both";
    });
  }
  if (window.scrollY >= aboutmeContainer.offsetTop - 500) {
    aboutCard.style.animation = "scale2 1.5s both";
    aniImg.style.animation = "scale 1.5s both";
  }
};

let year = document.getElementById("year");

let date = new Date().getFullYear();
year.innerHTML = date;
