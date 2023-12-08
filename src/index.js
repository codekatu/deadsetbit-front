// import css files
import "./reset.css";
import "./fonts.css";
import "./style.css";
import employees from "./employees";

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
const arrowRightFirstCard = document.getElementById("arrowRightFirstCard");
const arrowLeftSecondCard = document.getElementById("arrowLeftSecondCard");
const arrowRightSecondCard = document.getElementById("arrowRightSecondCard");
const arrowLeftThirdCard = document.getElementById("arrowLeftThirdCard");
const leftArrowButtons = document.querySelectorAll(".arrow-left");
const rightArrowButtons = document.querySelectorAll(".arrow-right");
const form = document.getElementById("contactForm");
const messageField = document.getElementById("messageField");
// var termsCheckbox = document.getElementById("termsCheckbox");
const emailField = document.getElementById("email");
const phoneField = document.getElementById("phone");
const contactPhone = document.getElementById("contactPhone");
const contactEmail = document.getElementById("contactEmail");
const contactFormRadioInputContainer = document.getElementById(
  "contactFormRadioInputContainer"
);
const submitButton = document.getElementById("submitButton");
const snackbarClose = document.getElementById("snackbarClose");
const infoContainer = document.getElementById("employeeInfoContainer");
const employeeCards = document.getElementsByClassName("employeeCard");
const employeeInfoContainer = document.getElementById("employeeInfoContainer");
const backdrop = document.getElementById("employeeInfoContainerModalBackdrop");
const infoModalCloseButton = document.getElementById(
  "employeeInfoContainerModalCloseButton"
);

function modalOpen() {
  if (window.innerWidth > 900) return;

  // employeeInfoContainer.style.display = "flex";
  // backdrop.style.display = "block";
  // infoModalCloseButton.style.display = "block";

  employeeInfoContainer.classList.add("visible");
  backdrop.classList.add("visible");
  infoModalCloseButton.classList.add("visible");

  // disable scrolling on the body when modal opens
  document.body.style.overflow = "hidden";
}

function modalClose() {
  // employeeInfoContainer.style.display = "none";
  // backdrop.style.display = "none";
  // infoModalCloseButton.style.display = "none";
  employeeInfoContainer.classList.remove("visible");
  backdrop.classList.remove("visible");
  infoModalCloseButton.classList.remove("visible");

  // make the body scrollable again when modal closes
  document.body.style.overflow = "auto";
}

// close the modal when screen resizes to desktop
window.addEventListener("resize", function () {
  if (window.innerWidth > 900) {
    modalClose();
  }
});

infoModalCloseButton.addEventListener("click", modalClose);

backdrop.addEventListener("click", modalClose);

// if the user clicks on the navbar or on the menu the modal should also close
navbar.addEventListener("click", modalClose);

function updateInfo(employeeName) {
  const employee = employees[employeeName];
  const socialInfoContainer = document.querySelector(".socialInfoContainer");

  infoContainer.querySelector(".employeeInfoImage").src = employee.img;
  infoContainer.querySelector(".employeeInfoName").textContent = employee.name;
  infoContainer.querySelector(".employeeInfoTitle").textContent =
    employee.title;

  const paragraphs = infoContainer.querySelectorAll(".employeeInfoText");
  paragraphs[0].textContent = employee.description1;
  paragraphs[1].textContent = employee.description2;

  const socialInfoElements =
    socialInfoContainer.querySelectorAll(".socialInfo");
  socialInfoElements.forEach((socialInfo) => {
    const socialType = socialInfo.id.replace("Container", "").toLowerCase();
    const socialValue = employee[socialType];

    if (socialValue) {
      socialInfo.style.display = "flex";

      const socialIcon = socialInfo.querySelector(".socialIcon");
      const socialText = socialInfo.querySelector(".socialText");

      socialIcon.src = `assets/employeesSection/${socialType}.svg`;

      // Check if the social type is email or phone to determine if it should be a link or no
      if (socialType === "email" || socialType === "phone") {
        socialText.textContent = socialValue;
      } else {
        socialText.innerHTML = `<a class="socialLink" href="${socialValue}">${socialValue}</a>`;
      }
    } else {
      socialInfo.style.display = "none";
    }
  });

  Array.from(employeeCards).forEach(function (card) {
    if (card.id === employeeName) {
      card.classList.add("employeeCardActive");
    } else {
      card.classList.remove("employeeCardActive");
    }
  });
}

// global variables
let isButtonPressed = false;
let timeout;
let isDragging = false;
let mouseDown = false;
let startX, scrollLeft;

// adds event listeners on load and runs functions on load to set the page up
window.onload = function () {
  // render first person to the employeeInfoContainer
  updateInfo("pauli");

  for (let index = 0; index < tabButtons.length; index++) {
    const element = tabButtons[index];
    element.addEventListener("click", tabButton);
  }

  Array.from(employeeCards).forEach(function (card) {
    card.addEventListener("click", function () {
      const employeeId = card.id;
      updateInfo(employeeId);
      modalOpen();
    });
  });

  // adds event listeners to arrow buttons on load
  arrowRightFirstCard.addEventListener("click", () => {
    scrollToTechCard(1);
    setActiveTechButton(1);
  });

  arrowLeftSecondCard.addEventListener("click", () => {
    scrollToTechCard(0);
    setActiveTechButton(0);
  });

  arrowRightSecondCard.addEventListener("click", () => {
    scrollToTechCard(2);
    setActiveTechButton(2);
  });

  arrowLeftThirdCard.addEventListener("click", () => {
    scrollToTechCard(1);
    setActiveTechButton(1);
  });

  // For mobile we use touchend instead of click
  arrowRightFirstCard.addEventListener("touchend", (e) => {
    e.preventDefault();
    scrollToTechCard(1);
    setActiveTechButton(1);
  });

  arrowLeftSecondCard.addEventListener("touchend", (e) => {
    e.preventDefault();
    scrollToTechCard(0);
    setActiveTechButton(0);
  });

  arrowRightSecondCard.addEventListener("touchend", (e) => {
    e.preventDefault();
    scrollToTechCard(2);
    setActiveTechButton(2);
  });

  arrowLeftThirdCard.addEventListener("touchend", (e) => {
    e.preventDefault();
    scrollToTechCard(1);
    setActiveTechButton(1);
  });

  // adds event listeners to tech navigation buttons on load, use the button index to scroll to the card with the same index
  techNavButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      scrollToTechCard(index);
      setActiveTechButton(index);
    });
  });

  Array.from(employeeCards).forEach(function (card) {
    if (card.id === "pauli") {
      card.classList.add("employeeCardActive");
    } else {
      return;
    }
  });

  Array.from(techCardContainer.children).forEach((button, index) => {
    // Don't add the event listener for mobile devices
    if (
      !/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      return;
    }

    // Add the event listener for scrolling to tech cards for mobile devices
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

  // Set the first card as the active card on load
  setActiveTechButton(0);

  // Calculate the position for scrollContainer to scroll to the first card
  const firstCard = techCardContainer.children[0];
  const firstCardPosition =
    firstCard.offsetLeft -
    (scrollContainer.offsetWidth / 2 - firstCard.offsetWidth / 2);
  scrollContainer.scrollLeft = firstCardPosition;

  submitButton.addEventListener("click", submitForm);
  snackbarClose.addEventListener("click", closeSnackbar);
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

function scrollToTechCard(index) {
  if (isDragging) return;

  isButtonPressed = true;

  // Get the specific card we want to scroll to
  const cardToScrollTo = techCardContainer.children[index];
  // Get the card's position from the left edge of the container
  const cardLeft = cardToScrollTo.offsetLeft;
  // Get the card's width
  const cardWidth = cardToScrollTo.offsetWidth;

  // Calculate the scroll position needed to center the card
  const newScrollPosition =
    // finds the cards left offset and adjusts it by half the containers width and half the cards width to center the card
    cardLeft - (scrollContainer.offsetWidth / 2 - cardWidth / 2);

  // Initialize variables for the animation
  let start = null;
  let currentScroll = scrollContainer.scrollLeft;

  // Function to animate the scrolling
  function step(timestamp) {
    // Record the start time of the animation
    if (!start) start = timestamp;

    // Calculate elapsed time since the animation started
    const elapsed = timestamp - start;

    // Calculate the progress of the animation (0 to 1)
    const progress = Math.min(elapsed / 250, 1); // duration of the animation

    // Update the scroll position based on progress
    scrollContainer.scrollLeft =
      currentScroll + (newScrollPosition - currentScroll) * progress;
    // If the animation isn't done, keep animating
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      // Reset the flag when the animation is done
      isButtonPressed = false;
    }
  }
  // Start the animation
  requestAnimationFrame(step);
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

  let closestCardIndex;
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
    closestCardIndex = techCardContainer.children.length - 1;
  }
  if (scrollAsLeftAsItCanBe) {
    closestCardIndex = 0;
  }
  setActiveTechButton(closestCardIndex);
}

// https://stackoverflow.com/a/66313884 Below mouse drag code is from this stackoverflow answer

const startDragging = (e) => {
  mouseDown = true;
  startX = e.pageX - scrollContainer.offsetLeft;
  scrollLeft = scrollContainer.scrollLeft;
};

const stopDragging = (e) => {
  mouseDown = false;
};

const move = (e) => {
  e.preventDefault();

  if (!mouseDown) {
    return;
  }

  const x = e.pageX - scrollContainer.offsetLeft;
  const scroll = x - startX;
  scrollContainer.scrollLeft = scrollLeft - scroll;
};
function disableSubmitButton() {
  var submitButton = document.getElementById("submitButton");
  submitButton.disabled = true;
}
function resetErrorStyles() {
  messageField.classList.remove("error");
  emailField.classList.remove("error");
  phoneField.classList.remove("error");
  contactFormRadioInputContainer.classList.remove("error");
}
function setErrorStyle(element) {
  element.classList.add("error");
}
function closeSnackbar() {
  var snackbar = document.getElementById("snackbar");
  snackbar.style.visibility = "hidden";
}

function showSnackbar() {
  var snackbar = document.getElementById("snackbar");
  snackbar.style.visibility = "visible";
  snackbar.style.top = "10%";
  snackbar.style.opacity = "1";
}

function submitForm() {
  resetErrorStyles();

  if (emailField.value.trim() === "" && phoneField.value.trim() === "") {
    setErrorStyle(emailField);
    setErrorStyle(phoneField);
    return;
  }

  if (messageField.value.trim() === "") {
    setErrorStyle(messageField);
    return;
  }

  if (!contactPhone.checked && !contactEmail.checked) {
    setErrorStyle(contactFormRadioInputContainer);
    return;
  }

  showSnackbar();

  form.submit();
  disableSubmitButton();

  form.reset();
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
// scrollContainer.addEventListener("mousemove", move, false);
scrollContainer.addEventListener("mousemove", throttle(move, 25), false); // increase or decrease the number to change the scroll speed

if (
  !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  scrollContainer.addEventListener("mousemove", move, false);
  scrollContainer.addEventListener("mousemove", throttle(move, 10), false); // increase or decrease the number to change the scroll speed
  scrollContainer.addEventListener("mousedown", startDragging, false);
  scrollContainer.addEventListener("mousedown", (e) => {
    if (window.innerWidth > 1600) return;
    startDragging(e);
    scrollContainer.classList.add("grabbing");
  });
  scrollContainer.addEventListener("mouseup", (e) => {
    if (window.innerWidth > 1600) return;
    isDragging = false;
    stopDragging(e);
    scrollContainer.classList.remove("grabbing");
  });
  scrollContainer.addEventListener("mouseleave", stopDragging, false);
}
