import "../../reset.css";
import "../../fonts.css";
import "./style.css";
// import marked and privacy policy markdown file. Marked is used to render the markdown to the page.
import { marked } from "marked";
import markdownContent from "./privacyPolicy.md";

import { navbarScrollResponsive } from "../../features/responsiveNavbar";
import { menuOpenClose } from "../../features/navbarMenuOpenClose";

// render the privacy policy markdown to the content div
document.getElementById("content").innerHTML = marked(markdownContent);

const navbarButton = document.getElementById("navbarButton");
const mainMenuOpacityLayer = document.getElementById("mainMenuOpacityLayer");

window.onload = function () {
  // calling here so that if window is on the middle of the page when reloading it will update the navbar to its scrolled state
  navbarScrollResponsive();
};

navbarButton.addEventListener("click", menuOpenClose);
mainMenuOpacityLayer.addEventListener("click", menuOpenClose);
window.addEventListener("scroll", navbarScrollResponsive);
