const logo = document.getElementById("logoSvg");
const listItems = document.getElementsByClassName("listItem");
const listItemLinkText = document.getElementsByClassName("listItemLinkText");
const navbar = document.getElementById("navbar");
const logoContainer = document.getElementById("logoContainer");

export function navbarScrollResponsive() {
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
