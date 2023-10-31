// import css files
import "./reset.css";
import "./fonts.css";
import "./style.css";

// getting dom elements
const navbar = document.getElementById("navbar");
const navbarList = document.getElementById("navbarList");
const listItems = document.getElementsByClassName("listItem");
const logoContainer = document.getElementById("logoContainer");
const logo = document.getElementById("logoSvg");
const leftEye = document.getElementById("leftEye");
const rightEye = document.getElementById("rightEye");
const tabImage = document.getElementById("banzaimanGameImage");
const navbarButton = document.getElementById("navbarButton");
const tabButtons = document.getElementsByClassName("tabSelectorButton");
const buttonImages = document.getElementsByClassName("buttonImage");
const mainMenuListLinks = document.getElementsByClassName("mainMenuListLink");
const mainMenuOpacityLayer = document.getElementById("mainMenuOpacityLayer");
const mainMenuContainer = document.getElementById("mainMenuContainer");

const techNavButtons = document.querySelectorAll(".techNavigationButton");
const techCardContainer = document.getElementById("technologyCardContainer");
const scrollContainer = document.getElementById("scrollContainer");

let isButtonPressed = false;
let timeout;

// adds event listeners to tab selector buttons on load
window.onload = function () {
  for (let index = 0; index < tabButtons.length; index++) {
    const element = tabButtons[index];
    element.addEventListener("click", tabButton);
  }

  // adds event listeners to tech navigation buttons on load, use the button index to scroll to the card with the same index
  techNavButtons.forEach((button, index) => {
    console.log(button, index);
    button.addEventListener("click", () => {
      scrollToTechCard(index);
      setActiveTechButton(index);
    });
  });

  for (let index = 0; index < mainMenuListLinks.length; index++) {
    const element = mainMenuListLinks[index];
    // element.addEventListener("click", (e) => {
    //   menuButton.style.display = "none";
    // });
    element.addEventListener("click", menuOpenClose);
  }

  navbarButton.addEventListener("click", menuOpenClose);
  mainMenuOpacityLayer.addEventListener("click", menuOpenClose);

  // page starts with the gong image selected so we make it's color white onload
  changeButtonColor("gongButtonImage");

  const middleCardIndex = Math.floor(techCardContainer.children.length / 2);
  setActiveTechButton(middleCardIndex);

  // Calculate the position for scrollContainer to scroll to
  const middleCard = techCardContainer.children[middleCardIndex];

  const middleCardPosition =
    //scrollContainer.offsetWidth / 2 calculates the midpoint of the scrollContainer. This is where we want to scroll to.
    //middleCard.offsetWidth / 2 calculates the midpoint of the middle card.

    middleCard.offsetLeft -
    (scrollContainer.offsetWidth / 2 - middleCard.offsetWidth / 2);

  scrollContainer.scrollLeft = middleCardPosition;
};

// throttle function to limit the amount of times a function is called
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

// function that scrolls to the card thats navigation button is clicked, takes a index as argument, block nearest prevents from vertical scrolling, and inline center centers the card to the viewport
function scrollToTechCard(index) {
  // Clear existing timeout to prevent overlapping actions
  clearTimeout(timeout);

  isButtonPressed = true;

  const cardToScrollTo = techCardContainer.children[index];

  cardToScrollTo.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "center",
  });
  timeout = setTimeout(() => {
    isButtonPressed = false;
  }, 1000);
}

// sets the active class on the navigation buttons
function setActiveTechButton(index) {
  techNavButtons.forEach((button) => {
    button.classList.remove("activeTechNavigationButton");
  });

  techNavButtons[index].classList.add("activeTechNavigationButton");
}

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
      element.parentElement.classList.add("tabSelectorButtonSelected");
    } else if (buttonImageId !== element.id) {
      element.classList.remove("buttonImageSelected");
      element.parentElement.classList.remove("tabSelectorButtonSelected");
    }
  }
}

// function that makes the dogs eyes follow the cursor
function dogEyeMove(e) {
  const rektLeft = leftEye.getBoundingClientRect(); // get the dimensions and location relative to viewport for the left eye
  const rektRight = rightEye.getBoundingClientRect(); // get the dimensions and location relative to viewport for the right eye

  const leftEyeX = rektLeft.left + rektLeft.width / 2;
  const leftEyeY = rektLeft.top + rektLeft.width / 2;

  const rightEyeX = rektRight.left + rektRight.width / 2;
  const rightEyeY = rektRight.top + rektRight.width / 2;

  // position of the cursor
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const angleDegLeftEye = angle(mouseX, mouseY, leftEyeX, leftEyeY); // get the degree of the angle between mouse and the eye
  const angleDegRightEye = angle(mouseX, mouseY, rightEyeX, rightEyeY); // get the degree of the angle between mouse and the eye

  leftEye.style.transform = `rotate(${90 + angleDegLeftEye}deg)`;
  rightEye.style.transform = `rotate(${90 + angleDegRightEye}deg)`;
}

//takes mouse position and dodgs eye position as arguments to count the angle between them
function angle(cx, cy, ex, ey) {
  const dy = ey - cy;
  const dx = ex - cx;
  const rad = Math.atan2(dy, dx); // gives us the angle in radian
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

    // loop trough the listItems HTMLcollection and add scrolled class

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

    // loop trough the listItemsScrolled HTMLcollection and remove scrolled class
    for (let index = 0; index < listItems.length; index++) {
      const element = listItems[index];
      element.classList.remove("listItemScrolled");
    }
  }
}

// function that opens and closes the menu
function menuOpenClose() {
  if (mainMenuContainer.style.display === "flex") {
    mainMenuContainer.style.display = "none";
    navbarButton.classList.toggle("clicked");
  } else {
    mainMenuContainer.style.display = "flex";
    navbarButton.classList.toggle("clicked");
  }
}

// updates the active button based on the scroll position on scrollContainer
function updateActiveButtonBasedOnScroll() {
  if (isButtonPressed) return;

  const containerRect = scrollContainer.getBoundingClientRect();
  const containerCenter = containerRect.left + containerRect.width / 2;

  let closestCardIndex = -1;
  let smallestDistance = Infinity;

  const scrollAsRightAsItCanBe =
    scrollContainer.scrollLeft + containerRect.width >=
    scrollContainer.scrollWidth;

  const scrollAsLeftAsItCanBe = scrollContainer.scrollLeft === 0;

  Array.from(techCardContainer.children).forEach((card, index) => {
    const cardRect = card.getBoundingClientRect();
    const cardCenter = cardRect.left + cardRect.width / 2;
    const distance = Math.abs(containerCenter - cardCenter);

    if (distance < smallestDistance) {
      smallestDistance = distance;
      closestCardIndex = index;
    }
  });

  if (scrollAsRightAsItCanBe) {
    console.log("as right as can be ");
    closestCardIndex = techCardContainer.children.length - 1;
  }
  if (scrollAsLeftAsItCanBe) {
    closestCardIndex = 0;
  }
  setActiveTechButton(closestCardIndex);
}

// scroll event listener to call navbarScrollReponsive function which changes the navbar on scroll
window.addEventListener("scroll", navbarScrollResponsive);
// adds event listener to mouse move that calls throttle function with dogEyeMove function and a timeout that limits the amount of times the function is called
window.addEventListener("mousemove", throttle(dogEyeMove, 25));
// event listener to the scrollContainer so that the navigation buttons color changes when user scrolls manually. Also add throttle function to limit the amount of times the function is called
scrollContainer.addEventListener(
  "scroll",
  throttle(updateActiveButtonBasedOnScroll, 100)
);
