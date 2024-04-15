const form = document.getElementById("contactForm");
const messageField = document.getElementById("messageField");
const termsCheckbox = document.getElementById("termsCheckbox");
const termsAndConditionsErrorBorder = document.getElementById(
  "termsAndConditionsErrorBorder"
);
const emailLabel = document.getElementById("emailLabel");
const phoneLabel = document.getElementById("phoneLabel");
const emailField = document.getElementById("email");
const phoneField = document.getElementById("phone");
const contactPhone = document.getElementById("contactPhone");
const contactEmail = document.getElementById("contactEmail");
const contactFormRadioInputContainer = document.getElementById(
  "contactFormRadioInputContainer"
);
const thanksForContactingUsContainer = document.getElementsByClassName(
  "thanksForContactingUsContainer"
);

const submitButton = document.getElementById("submitButton");

export function ContactMethodRequirements() {
  if (contactPhone.checked) {
    emailLabel.textContent = "Email";
    phoneLabel.textContent = "Phone Number*";
    emailField.classList.contains("error")
      ? emailField.classList.remove("error")
      : null;
    phoneField.placeholder = "Please enter your phone number";
    emailField.placeholder = "";
  } else if (contactEmail.checked) {
    emailLabel.textContent = "Email*";
    phoneLabel.textContent = "Phone Number";
    phoneField.classList.contains("error")
      ? phoneField.classList.remove("error")
      : null;
    emailField.placeholder = "Please enter your email";
    phoneField.placeholder = "";
  }
  contactFormRadioInputContainer.classList.contains("error")
    ? contactFormRadioInputContainer.classList.remove("error")
    : null;
}

export function requiredFieldChange() {
  const emailValue = emailField.value.trim();
  const phoneValue = phoneField.value.trim();

  if (phoneValue !== "" && !contactEmail.checked && emailValue == "") {
    phoneLabel.textContent = "Phone Number*";
    phoneField.classList.remove("error");
    emailLabel.textContent = "Email";
    removeContactFormPlaceholder();
    resetErrorStyles();
  } else if (emailValue !== "" && !contactPhone.checked && phoneValue == "") {
    emailLabel.textContent = "Email*";
    emailField.classList.remove("error");
    phoneLabel.textContent = "Phone Number";
    removeContactFormPlaceholder();
    resetErrorStyles();
  } else if (
    emailValue == "" &&
    phoneValue == "" &&
    !contactPhone.checked &&
    !contactEmail.checked
  ) {
    // Both fields are empty, set * to both labels only if neither radio button is checked
    emailLabel.textContent = "Email*";
    phoneLabel.textContent = "Phone Number*";
    addContactFormPlaceholder();
    resetErrorStyles();
  }
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
function removeContactFormPlaceholder() {
  emailField.placeholder = "";
  phoneField.placeholder = "";
}
function addContactFormPlaceholder() {
  emailField.placeholder = "Please fill at least one: Email or Phone Number";
  phoneField.placeholder = "Please fill at least one: Email or Phone Number";
}

export function submitForm() {
  resetErrorStyles();

  var emailValue = emailField.value.trim();
  var phoneValue = phoneField.value.trim();

  if (contactPhone.checked && phoneValue === "") {
    setErrorStyle(phoneField);
    return;
  }

  if (contactEmail.checked && emailValue === "") {
    setErrorStyle(emailField);
    return;
  }

  if (emailValue === "" && phoneValue === "") {
    setErrorStyle(emailField);
    setErrorStyle(phoneField);
    return;
  }

  if (messageField.value.trim() === "") {
    setErrorStyle(messageField);
    return;
  }

  // Check if the user has selected either phone or email
  if (!contactPhone.checked && !contactEmail.checked) {
    setErrorStyle(contactFormRadioInputContainer);
    return;
  }
  if (!termsCheckbox.checked) {
    setErrorStyle(termsAndConditionsErrorBorder);
    return;
  }

  form.submit();
  form.reset();
  form.style.display = "none";
  thanksForContactingUsContainer[0].style.display = "flex";
}

export function addFormEventListeners() {
  contactPhone.addEventListener("change", ContactMethodRequirements);
  contactEmail.addEventListener("change", ContactMethodRequirements);
  emailField.addEventListener("input", requiredFieldChange);
  phoneField.addEventListener("input", requiredFieldChange);
  emailField.addEventListener("input", () => {
    emailField.classList.contains("error")
      ? emailField.classList.remove("error")
      : null;
  });

  phoneField.addEventListener("input", () => {
    phoneField.classList.contains("error")
      ? phoneField.classList.remove("error")
      : null;
  });

  messageField.addEventListener("input", (e) => {
    e.target.classList.contains("error")
      ? e.target.classList.remove("error")
      : null;
  });

  submitButton.addEventListener("click", submitForm);
}
