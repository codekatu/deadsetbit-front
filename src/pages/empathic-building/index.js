import "../../reset.css";
import "../../fonts.css";
import "./style.css";

import { navbarScrollResponsive } from "../../features/responsiveNavbar";
import { menuOpenClose } from "../../features/navbarMenuOpenClose";
import { addFormEventListeners } from "../../features/contactFormLogic";

const mainMenuOpacityLayer = document.getElementById("mainMenuOpacityLayer");
const navbarButton = document.getElementById("navbarButton");

window.onload = function () {
  // calling here so that if window is on the middle of the page when reloading it will update the navbar to its scrolled state
  navbarScrollResponsive();
  addFormEventListeners();
};

navbarButton.addEventListener("click", menuOpenClose);
mainMenuOpacityLayer.addEventListener("click", menuOpenClose);
window.addEventListener("scroll", navbarScrollResponsive);
