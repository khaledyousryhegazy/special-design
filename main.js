// START MENU BUTTON
let menu = document.querySelector(".header i");
let list = document.querySelector(".header ul");

// DO EVENTS OPEN
menu.addEventListener("click", fnMenuOpen);

// TO OPEN MENU
function fnMenuOpen() {
  list.classList.toggle("open-menu");
}

// END MENU SETTING
// START RANDOM WALLPAPER
let landing = document.querySelector(".landing");

let imgArr = [
  "../imgs/01.jpg",
  "../imgs/02.jpg",
  "../imgs/03.jpg",
  "../imgs/04.jpg",
  "../imgs/05.jpg",
  "../imgs/07.jpg",
  "../imgs/08.jpg",
  "../imgs/09.jpg",
  "../imgs/10.jpg",
];
// START SETTING RANDOM BACKGROUND
let yesNo = document.querySelectorAll(".random-wallpaper span");
let localStorageBackground = window.localStorage.getItem("background");
let backgroundOption = true;
let backgroundInterval;

// FUNCTION TO RANDOM BACKGROUND
function randomImg() {
  if (backgroundOption === true) {
    // TIME TO PUT RANDOM BACKGROUND EVERY 10S
    backgroundInterval = setInterval(setRandomBackground, 1000);

    function setRandomBackground() {
      let randomImg = imgArr[Math.floor(Math.random() * imgArr.length)];
      landing.style.backgroundImage = `url(${randomImg})`;
    }
  }
}
// JS SETTING

yesNo.forEach((span) => {
  span.addEventListener("click", (e) => {
    yesNo.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");

    window.localStorage.setItem("background", span.dataset.background);
    // EDIT HERE
    if (span.dataset.background === "yes") {
      backgroundOption = true;
      randomImg();
    } else {
      backgroundOption = false;
      clearInterval(backgroundInterval);
    }
  });
});
// RERUN CODE WHEN OPEN PAGE AGAIN OR RELOAD
if (localStorageBackground === "yes") {
  backgroundOption = true;
  randomImg();
} else {
  backgroundOption = false;
  clearInterval(backgroundInterval);
}

// REMOVE ALL ACTIVE CLASSES
yesNo.forEach((ele) => {
  ele.classList.remove("active");
});
// PUT ACTIVE CLASS ON ELEMENT IN LOCAL STORAGE
if (localStorageBackground) {
  document
    .querySelector(`[data-background="${localStorageBackground}"]`)
    .classList.add("active");
}
// END SETTING RANDOM BACKGROUND
// END RANDOM BACKGROUND

// START OUR GALLERY SHOW ============================================

let parent = document.querySelector(".parent");
let imgContainer = document.querySelector(".img-container");
let close = document.querySelector(".close");
let images = document.querySelectorAll(".our-gallery .images");

images.forEach((img) => {
  img.addEventListener("click", (e) => {
    // EMPTY THE imgContainer
    imgContainer.innerHTML = "";
    // THE CHOSEN IMAGE
    let chosen = e.target;

    let copyImg = chosen.cloneNode(true);
    imgContainer.appendChild(copyImg);

    parent.style.display = "block";

    close.addEventListener("click", () => {
      parent.style.display = "none";
    });
  });
});

// END OUR GALLERY SHOW ============================================

// SCROLL EVENT FILL WIDTH
let section = document.querySelector(".our-skills");
let skillParent = document.querySelectorAll(".our-skills .skill span span");

window.addEventListener("scroll", scrollSkills);

function scrollSkills() {
  const height = window.innerHeight / 2;
  const top = section.getBoundingClientRect().top;

  if (top < height) {
    skillParent.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
}
// START SETTING SIDE BAR
let sideBar = document.querySelector(".setting");
let iconOpen = document.querySelector(".setting i");
let colorContent = document.querySelector(".setting .content");

iconOpen.addEventListener("click", () => {
  sideBar.classList.toggle("open-close");
  sideBar.classList.toggle("padding");
  colorContent.classList.toggle("show");
});

// COLOR SETTING
let colors = document.querySelectorAll(".content .color ul li");

// REMOVE ACTIVE CLASS FROM ALL ELEMENT AND ADD ON CURRENT
colors.forEach((lis) => {
  lis.addEventListener("click", (e) => {
    colors.forEach((li) => {
      li.classList.remove("active");
    });
    e.target.classList.add("active");
    // PUT IN LOCAL STORAGE
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
    // SET COLOR IN PAGE
    document.documentElement.style.setProperty(
      "--main-color",
      window.localStorage.getItem("color")
    );
  });
});

// GET COLOR FROM LOCAL STORAGE
if (window.localStorage.getItem("color")) {
  document.documentElement.style.setProperty(
    "--main-color",
    window.localStorage.getItem("color")
  );
}

colors.forEach((li) => {
  li.classList.remove("active");
});
if (window.localStorage.getItem("color")) {
  document
    .querySelector(`[data-color = "${window.localStorage.getItem("color")}"]`)
    .classList.add("active");
}
// FOR THE SCROLL POINTS
let scroll = document.querySelector(".scroll-pointes");
let scrollBtn = document.querySelectorAll(".scroll span");
let scrollOption = true;

scrollBtn.forEach((span) => {
  span.addEventListener("click", (e) => {
    scrollBtn.forEach((el) => {
      el.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    window.localStorage.setItem("scroll", span.dataset.display);
    if (window.localStorage.getItem("scroll") === "show") {
      scrollOption = true;
      scroll.style.display = "block";
    } else {
      scrollOption = false;
      scroll.style.display = "none";
    }
  });
});

if (window.localStorage.getItem("scroll") === "show") {
  scrollOption = true;
  scroll.style.display = "block";
} else {
  scrollOption = false;
  scroll.style.display = "none";
}

scrollBtn.forEach((el) => {
  el.classList.remove("active");
});

if (window.localStorage.getItem("scroll")) {
  document
    .querySelector(`[data-display="${window.localStorage.getItem("scroll")}"]`)
    .classList.add("active");
}
// ==============================================
//  START DARK MODE THEME =======================
// ==============================================
const toggleBtn = document.getElementById("toggle-btn");
const theme = document.querySelector("body");
let darkMode = localStorage.getItem("dark-mode");
let ourSkills = document.querySelector(".our-skills");
let skill = document.querySelectorAll(".our-skills .skill");
let TimeLine = document.querySelector(".time-line");
let TimeLineInfo = document.querySelectorAll(".time-line .time-info");
let contact = document.querySelector(".contact-us");
// ENABLE DARK MODE
const enableDarkMode = () => {
  theme.classList.add("dark-mode-theme");
  toggleBtn.classList.remove("dark-mode-toggle");
  ourSkills.classList.add("dark-mode-theme");

  skill.forEach((ele) => {
    ele.classList.add("dark-mode-theme");
  });
  TimeLine.classList.add("dark-mode-theme");
  TimeLineInfo.forEach((ele) => {
    ele.classList.add("dark-mode-theme");
  });
  contact.classList.add("dark-mode-theme");
  localStorage.setItem("dark-mode", "enabled");
};
// DISABLE DARK MODE
const disableDarkMode = () => {
  theme.classList.remove("dark-mode-theme");
  toggleBtn.classList.add("dark-mode-toggle");
  ourSkills.classList.remove("dark-mode-theme");
  skill.forEach((ele) => {
    ele.classList.remove("dark-mode-theme");
  });
  TimeLine.classList.remove("dark-mode-theme");
  TimeLineInfo.forEach((ele) => {
    ele.classList.remove("dark-mode-theme");
  });
  contact.classList.remove("dark-mode-theme");
  localStorage.setItem("dark-mode", "disabled");
};

if (darkMode === "enabled") {
  enableDarkMode();
  toggleBtn.checked = true;
}

toggleBtn.addEventListener("click", (e) => {
  darkMode = localStorage.getItem("dark-mode");
  if (darkMode === "disabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

// END DARK MODE
// RESET BUTTON
let reset = document.querySelector(".reset");

reset.addEventListener("click", () => {
  localStorage.clear();
  window.location.reload();
});
// FINAL
