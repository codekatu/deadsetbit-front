import "../../reset.css";
import "../../fonts.css";
import "./style.css";
// import marked and privacy policy markdown file. Marked is used to render the markdown to the page.
import { marked } from "marked";
import markdownContent from "./privacyPolicy.md";

// render the privacy policy markdown to the content div
document.getElementById("content").innerHTML = marked(markdownContent);

const navbar = document.getElementById("navbar");
const navbarList = document.getElementById("navbarList");
const listItems = document.getElementsByClassName("listItem");
const navbarButton = document.getElementById("navbarButton");
const mainMenuListLinks = document.getElementsByClassName("mainMenuListLink");
const mainMenuOpacityLayer = document.getElementById("mainMenuOpacityLayer");
const mainMenuContainer = document.getElementById("mainMenuContainer");
const logoContainer = document.getElementById("logoContainer");
const logo = document.getElementById("logoSvg");
const listItemLinkText = document.getElementsByClassName("listItemLinkText");

window.onload = function () {
  // calling here so that if window is on the middle of the page when reloading it will update the navbar to its scrolled state
  navbarScrollResponsive();
};
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

    for (let index = 0; index < listItemLinkText.length; index++) {
      const element = listItemLinkText[index];
      element.classList.add("listItemLinkTextScrolled");
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
    for (let index = 0; index < listItemLinkText.length; index++) {
      const element = listItemLinkText[index];
      element.classList.remove("listItemLinkTextScrolled");
    }
  }
}

function menuOpenClose() {
  if (mainMenuContainer.style.display === "flex") {
    mainMenuContainer.style.display = "none";
    navbarButton.classList.toggle("clicked");
  } else {
    mainMenuContainer.style.display = "flex";
    navbarButton.classList.toggle("clicked");
  }
}

navbarButton.addEventListener("click", menuOpenClose);
mainMenuOpacityLayer.addEventListener("click", menuOpenClose);
window.addEventListener("scroll", navbarScrollResponsive);
