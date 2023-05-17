// import css files
import "./reset.css";
import "./style.css";
import "./fonts.css";

// getting dom elements
const pageWrapper = document.getElementById("pageWrapper");
const navbar = document.getElementById("navbar");
const listItems = document.getElementsByClassName("listItem");
const logoContainer = document.getElementById("logoContainer");
const logo = document.getElementById("logoSvg");
const leftEye = document.getElementById("leftEye");
const rightEye = document.getElementById("rightEye");
const eyes = document.querySelectorAll(".eye");
const doggo = document.getElementById("doggo");
const tabImage = document.getElementById("banzaimanGameImage");
const gongButton = document.getElementById("gongButton");
const mountainButton = document.getElementById("mountainButton");
const glyphButton = document.getElementById("glyphButton");
const spaceButton = document.getElementById("spaceButton");
const maracasButton = document.getElementById("maracasButton");
const menuButton = document.getElementById("mainMenu");
const navbarButton = document.getElementById("navbarButton");
const tabButtons = document.getElementsByClassName("tabSelectorButton");
const buttonImages = document.getElementsByClassName("buttonImage");
const mainMenuListLinks = document.getElementsByClassName("mainMenuListLink");

// adds event listeners to tab selector buttons on load
window.onload = function () {
  for (let index = 0; index < tabButtons.length; index++) {
    const element = tabButtons[index];
    element.addEventListener("click", (e) => {
      tabButton(e);
    });
  }

  for (let index = 0; index < mainMenuListLinks.length; index++) {
    const element = mainMenuListLinks[index];
    element.addEventListener("click", (e) => {
      menuButton.style.display = "none";
    });
  }

  navbarButton.addEventListener("click", menuOpenClose);

  for (let index = 0; index < mainMenuListLinks.length; index++) {
    const element = mainMenuListLinks[index];
  }

  // page starts with the gong image selected so we make it's color white onload
  changeButtonColor("gongButtonImage");
};

// function that changes the game picture depending on which button is clicked. Also calls the changeButtonColor function to change the color of the button
function tabButton(e) {
  if (e.target.id === "gongButton" || e.target.id === "gongButtonImage") {
    tabImage.setAttribute(
      "src",
      "assets/banzaimanSection/tabSelector/banzai_1.webp"
    );
    changeButtonColor("gongButtonImage");
  } else if (
    e.target.id === "mountainButton" ||
    e.target.id === "mountainButtonImage"
  ) {
    tabImage.setAttribute(
      "src",
      "assets/banzaimanSection/tabSelector/banzai_2.webp"
    );
    changeButtonColor("mountainButtonImage");
  } else if (
    e.target.id === "glyphButton" ||
    e.target.id === "glyphButtonImage"
  ) {
    tabImage.setAttribute(
      "src",
      "assets/banzaimanSection/tabSelector/banzai_3.webp"
    );
    changeButtonColor("glyphButtonImage");
  } else if (
    e.target.id === "spaceButton" ||
    e.target.id === "spaceButtonImage"
  ) {
    tabImage.setAttribute(
      "src",
      "assets/banzaimanSection/tabSelector/banzai_4.webp"
    );
    changeButtonColor("spaceButtonImage");
  } else if (
    e.target.id === "maracasButton" ||
    e.target.id === "maracasButtonImage"
  ) {
    tabImage.setAttribute(
      "src",
      "assets/banzaimanSection/tabSelector/banzai_5.webp"
    );
    changeButtonColor("maracasButtonImage");
  }
}

// function that changes the button color
function changeButtonColor(buttonImageId) {
  for (let index = 0; index < buttonImages.length; index++) {
    const element = buttonImages[index];

    if (buttonImageId === element.id) {
      element.classList.add("buttonImageSelected");
    } else if (buttonImageId !== element.id) {
      element.classList.remove("buttonImageSelected");
    }
  }
}

// scroll event listener to call navbarScrollReponsive function which changes the navbar on scroll
window.addEventListener("scroll", navbarScrollResponsive);

const throttle = (fn, wait) => {
  let inThrottle, lastFn, lastTime;
  return function () {
    const context = this,
      args = arguments;
    if (!inThrottle) {
      fn.apply(context, args);
      lastTime = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(lastFn);
      lastFn = setTimeout(function () {
        if (Date.now() - lastTime >= wait) {
          fn.apply(context, args);
          lastTime = Date.now();
        }
      }, Math.max(wait - (Date.now() - lastTime), 0));
    }
  };
};
// function that makes the dogs eyes follow the cursor
// code that is commented out counts the angle from the middle of the dogs container so that both eyes follow the cursor with same angle, therefore not crossing when hovering between the eyes
window.addEventListener("mousemove", throttle(dogEyeMove, 25));

function dogEyeMove(e) {
  // const rekt = doggo.getBoundingClientRect();

  // const doggoX = rekt.left + rekt.width / 2;
  // const doggoY = rekt.top + rekt.height / 2;
  console.log("hello world");
  const rektLeft = leftEye.getBoundingClientRect(); // get the dimensions and location relative to viewport for the left eye
  const rektRight = rightEye.getBoundingClientRect(); // get the dimensions and location relative to viewport for the right eye

  const leftEyeX = rektLeft.left + rektLeft.width / 2;
  const leftEyeY = rektLeft.top + rektLeft.width / 2;

  const rightEyeX = rektRight.left + rektRight.width / 2;
  const rightEyeY = rektRight.top + rektRight.width / 2;

  // position of the cursor
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  // const angleDeg = angle(mouseX, mouseY, doggoX, doggoY);

  // eyes.forEach((eye) => {
  //   eye.style.transform = `rotate(${90 + angleDeg}deg)`;
  // });

  const angleDegLeftEye = angle(mouseX, mouseY, leftEyeX, leftEyeY); // get the degree of the angle between mouse and the eye
  const angleDegRightEye = angle(mouseX, mouseY, rightEyeX, rightEyeY); // get the degree of the angle between mouse and the eye

  leftEye.style.transform = `rotate(${90 + angleDegLeftEye}deg)`;
  rightEye.style.transform = `rotate(${90 + angleDegRightEye}deg)`;
}

//takes mouse position and dog position as arguments to count the angle between them
function angle(cx, cy, ex, ey) {
  const dy = ey - cy;
  const dx = ex - cx;
  const rad = Math.atan2(dy, dx); // gives us the angle between two points in radian
  const deg = (rad * 180) / Math.PI; // converts the radian into degrees
  return deg;
}

// function that changes the navbar on depending on scrollY position
function navbarScrollResponsive() {
  // when scroll goes over 150 add scrolled class to these elements
  if (window.scrollY > 100) {
    navbar.classList.add("navbarScrolled");
    logoContainer.classList.add("logoContainerScrolled");
    logo.classList.add("logoSvgScrolled");

    // loop trough the listItems HTMLcollection and change their className

    for (let index = 0; index < listItems.length; index++) {
      const element = listItems[index];
      element.classList.add("listItemScrolled");
    }
  }
  // when scroll is under 150 change these classes to their default state
  else {
    navbar.classList.remove("navbarScrolled");
    logoContainer.classList.remove("logoContainerScrolled");
    logo.classList.remove("logoSvgScrolled");

    // loop trough the listItemsScrolled HTMLcollection and change their className
    for (let index = 0; index < listItems.length; index++) {
      const element = listItems[index];
      element.classList.remove("listItemScrolled");
    }
  }
}

// function that opens and closes the menu
function menuOpenClose() {
  if (menuButton.style.display === "flex") {
    menuButton.style.display = "none";
    pageWrapper.classList.toggle = "mainMenuBackgroundColor";
  } else {
    menuButton.style.display = "flex";
  }
}
