import "./reset.css";
import "./style.css";

// getting dom elements via id
const navbar = document.getElementById("navbar");
const logoContainer = document.getElementById("logoContainer");
const logo = document.getElementById("logoSvg");
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
const mainMenuListLinks = document.getElementsByClassName("mainMenuListLink");
// adds event listeners to tab selector buttons on load
window.onload = function () {
  for (let index = 0; index < tabButtons.length; index++) {
    const element = tabButtons[index];
    element.addEventListener("click", (e) => {
      tabButton(e);
    });
    navbarButton.addEventListener("click", menuOpenClose);
  }

  for (let index = 0; index < mainMenuListLinks.length; index++) {
    const element = mainMenuListLinks[index];
  }
};

// function that checks which tab button was pressed, then updates the game image to the corresponding image
// also updates the colors of the tab selector buttons
function tabButton(e) {
  if (e.target.id === "gongButton") {
    tabImage.setAttribute(
      "src",
      "assets/banzaimanSection/tabSelector/banzai_1.png"
    );

    gongButton.style.backgroundImage =
      "url(assets/banzaimanSection/tabSelector/gongWhite.svg)";

    mountainButton.style.backgroundImage =
      "url(assets/banzaimanSection/tabSelector/mountain.svg)";

    glyphButton.style.backgroundImage =
      "url(assets/banzaimanSection/tabSelector/glyph.svg)";

    spaceButton.style.backgroundImage =
      "url(assets/banzaimanSection/tabSelector/space.svg)";

    maracasButton.style.backgroundImage =
      "url(assets/banzaimanSection/tabSelector/maracas.svg)";
  } else if (e.target.id === "mountainButton") {
    tabImage.setAttribute(
      "src",
      "assets/banzaimanSection/tabSelector/banzai_2.png"
    );

    mountainButton.style.backgroundImage =
      "url(assets/banzaimanSection/tabSelector/mountainWhite.svg)";

    gongButton.style.backgroundImage =
      "url(assets/banzaimanSection/tabSelector/gong.svg)";

    glyphButton.style.backgroundImage =
      "url(assets/banzaimanSection/tabSelector/glyph.svg)";

    spaceButton.style.backgroundImage =
      "url(assets/banzaimanSection/tabSelector/space.svg)";

    maracasButton.style.backgroundImage =
      "url(assets/banzaimanSection/tabSelector/maracas.svg)";
  } else if (e.target.id === "glyphButton") {
    tabImage.setAttribute(
      "src",
      "assets/banzaimanSection/tabSelector/banzai_3.png"
    );

    glyphButton.style.backgroundImage =
      "url(assets/banzaimanSection/tabSelector/glyphWhite.svg)";

    mountainButton.style.backgroundImage =
      "url(assets/banzaimanSection/tabSelector/mountain.svg)";

    gongButton.style.backgroundImage =
      "url(assets/banzaimanSection/tabSelector/gong.svg)";

    spaceButton.style.backgroundImage =
      "url(assets/banzaimanSection/tabSelector/space.svg)";

    maracasButton.style.backgroundImage =
      "url(assets/banzaimanSection/tabSelector/maracas.svg)";
  } else if (e.target.id === "spaceButton") {
    tabImage.setAttribute(
      "src",
      "assets/banzaimanSection/tabSelector/banzai_4.png"
    );

    spaceButton.style.backgroundImage =
      "url(assets/banzaimanSection/tabSelector/spaceWhite.svg)";

    glyphButton.style.backgroundImage =
      "url(assets/banzaimanSection/tabSelector/glyph.svg)";

    mountainButton.style.backgroundImage =
      "url(assets/banzaimanSection/tabSelector/mountain.svg)";

    gongButton.style.backgroundImage =
      "url(assets/banzaimanSection/tabSelector/gong.svg)";

    maracasButton.style.backgroundImage =
      "url(assets/banzaimanSection/tabSelector/maracas.svg)";
  } else if (e.target.id === "maracasButton") {
    tabImage.setAttribute(
      "src",
      "assets/banzaimanSection/tabSelector/banzai_5.png"
    );
    maracasButton.style.backgroundImage =
      "url(assets/banzaimanSection/tabSelector/maracasWhite.svg)";

    spaceButton.style.backgroundImage =
      "url(assets/banzaimanSection/tabSelector/space.svg)";

    glyphButton.style.backgroundImage =
      "url(assets/banzaimanSection/tabSelector/glyph.svg)";

    mountainButton.style.backgroundImage =
      "url(assets/banzaimanSection/tabSelector/mountain.svg)";

    gongButton.style.backgroundImage =
      "url(assets/banzaimanSection/tabSelector/gong.svg)";
  }
}

// scroll event listener to change navbar
window.addEventListener("scroll", navbarScrollResponsive);

window.addEventListener("mousemove", (e) => {
  const rekt = doggo.getBoundingClientRect(); // get the dimensions and location relative to viewport for the dog image

  // coordinates for the middle of the anchor image
  const doggoX = rekt.left + rekt.width / 2;
  const doggoY = rekt.top + rekt.height / 2;

  // position of the cursor
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const angleDeg = angle(mouseX, mouseY, doggoX, doggoY);
  console.log(angleDeg);

  eyes.forEach((eye) => {
    eye.style.transform = `rotate(${90 + angleDeg}deg)`;
  });
});

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
  // getting HTMLcollections from dom
  const listItems = document.getElementsByClassName("listItem");
  const listItemsScrolled = document.getElementsByClassName("listItemScrolled");

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
    for (let index = 0; index < listItemsScrolled.length; index++) {
      const element = listItemsScrolled[index];
      element.classList.remove("listItemScrolled");
    }
  }
}

function menuOpenClose() {
  if (menuButton.style.display === "flex") {
    menuButton.style.display = "none";
  } else {
    menuButton.style.display = "flex";
  }
}
