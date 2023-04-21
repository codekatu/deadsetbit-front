import "./reset.css";
import "./style.css";

// getting dom elements via id
const navbar = document.getElementById("navbar");
const logoContainer = document.getElementById("logoContainer");
const logo = document.getElementById("logoSvg");

// scroll event listener to change navbar
window.addEventListener("scroll", navbarScrollResponsive);

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
