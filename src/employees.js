/**
 * This file contains the information shown in the employeeInfoContainer.
 * This is not to be confused with the employeeCards which are statically in the HTML.
 *
 * If you want to add a employee, you also need to create them a employeeCard with their name as the id.
 *
 * then you can create a new object in this file with the following format:
 *
 *   {
 *     img: "assets/employeesSection/yourImage.webp",
 *     name: "Your Name",
 *     title: "Your Title",
 *     email: "
 *     phone: "+358 40 123 4567",
 *     cv: "https://www.google.com/",
 *     linkedin: "https://www.google.com/",
 *     description1: "Your description",
 *     description2: "Your description",
 *   }
 *
 * If the user does not have some of the social information, you can leave it out and it will not be rendered.
 *
 */
const employees = {
  pauli: {
    img: "assets/employeesSection/pauli.webp",
    name: "Pauli Ervi",
    title: "The Original Bit",
    email: "pauli@deadsetbit.com",
    phone: "+358 40 123 4567",
    cv: "https://www.google.com/",
    linkedin: "https://www.linkedin.com/",

    description1:
      "Pauli ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac gravida mi. Suspendisse nec purus varius, malesuada massa non, condimentum mi. Aenean non sagittis placerat. t, consectetur adipiscing.",
    description2:
      "Phasellus semper mi quis tempor varius. Fusce.  cincidunt mi interdum eget. Duis non lcidunt mi interdum eget. Duis non leo.",
  },
  jasu: {
    img: "assets/employeesSection/jasu.webp",
    name: "Yacine Ouarab",
    title: "Trusty lieutenant",
    email: "jasu@deadsetbit.com",
    cv: "https://www.google.com/",
    linkedin: "https://www.linkedin.com/",
    description1:
      "Jasu ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac gravida mi. Suspendisse nec purus varius, malesuada massa non, Suspendisse nec purus varius, malesuada massa non, condimentum mi. Aenean non sagittis placerat condimentum mi. Aenean non sagittis placerat.",
    description2:
      " tempor vaPhasellus semper mi quis tempor varius   nec. Integer gravida interdum ex, sed tincidunt mi interdum eget. Duis non leo.",
  },
  nick: {
    img: "assets/employeesSection/nikki.webp",
    name: "Nick Kononov",
    title: "The Hearty Hacker",
    email: "nick@deadsetbit.com",
    phone: "+358 40 123 4567",
    cv: "https://www.google.com/",
    linkedin: "https://www.linkedin.com/",

    description1:
      "Nick ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac gravida mi. Suspendisse nec purus varius, malesuada massa non, condimentum mi. Aenean non sagittis placerat.",
    description2:
      "Phasellus semper mi quis tempor varius. Fusce cursus eros dui, eget accumsan libero ullamcorper nec. Integer gravida interdum ex, sed tincidunt mi interdum eget. Duis non leo.",
  },
  jonna: {
    img: "assets/employeesSection/jonna.webp",
    name: "Jonna Salomaa",
    title: "The Dream Master",
    email: "jonna@deadsetbit.com",
    cv: "https://www.google.com/",
    linkedin: "https://www.linkedin.com/",

    description1:
      "Jonna ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac gravida mi. Suspendisse nec purus varius, malesuada massa non, condimentum mi. Aenean non sagittis placerat.",
    description2:
      "Phasellus semper mi quis tempor varius. Fusce cursus eros dui, eget accumsan libero ullamcorper nec. Integer gravida interdum ex, sed tincidunt mi interdum eget. Duis non leo.",
  },
  simo: {
    img: "assets/employeesSection/simo.webp",
    name: "Simo Jokela",
    title: "Activated his trap card",
    email: "simo@deadsetbit.com",
    cv: "https://www.google.com/",
    linkedin: "https://www.linkedin.com/",
    description1:
      "Simo ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac gravida mi. Suspendisse nec purus varius, malesuada massa non, condimentum mi. Aenean non sagittis placerat.",
    description2:
      "Phasellus semper mi quis tempor varius. Fusce cursus eros dui, eget accumsan libero ullamcorper nec. Integer gravida interdum ex, sed tincidunt mi interdum eget. Duis non leo.",
  },
  antti: {
    img: "assets/employeesSection/antti.webp",
    name: "Antti Luukka",
    title: "The Impostor",
    email: "antti@deadsetbit.com",
    cv: "https://www.google.com/",
    linkedin: "https://www.linkedin.com/",
    description1:
      "Antti ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac gravida mi. Suspendisse nec purus varius, malesuada massa non, condimentum mi. Aenean non sagittis placerat.",
    description2:
      "Phasellus semper mi quis tempor varius. Fusce cursus eros dui, eget accumsan libero ullamcorper nec. Integer gravida interdum ex, sed tincidunt mi interdum eget. Duis non leo.",
  },

  christopher: {
    img: "assets/employeesSection/toffe.webp",
    name: "Christopher Harju",
    title: "The Toffe",
    email: "christopher@deadsetbit.com",
    cv: "https://www.google.com/",
    linkedin: "https://www.linkedin.com/",
    description1:
      "Toffe ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac gravida mi. Suspendisse nec purus varius, malesuada massa non, condimentum mi. Aenean non sagittis placerat.",
    description2:
      "Phasellus semper mi quis tempor varius. Fusce cursus eros dui, eget accumsan libero ullamcorper nec. Integer gravida interdum ex, sed tincidunt mi interdum eget. Duis non leo.",
  },
  alex: {
    img: "assets/employeesSection/alex.webp",
    name: "Alex Grönholm",
    title: "The Python Charmer",
    email: "alex@deadsetbit.com",
    phone: "+358 40 123 4567",
    cv: "https://www.google.com/",
    linkedin: "https://www.linkedin.com/",
    description1:
      "Alex ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac gravida mi. Suspendisse nec purus varius, malesuada massa non, condimentum mi. Aenean non sagittis placerat.",
    description2:
      "Phasellus semper mi quis tempor varius. Fusce cursus eros dui, eget accumsan libero ullamcorper nec. Integer gravida interdum ex, sed tincidunt mi interdum eget. Duis non leo.",
  },
  hugo: {
    img: "assets/employeesSection/hugo.webp",
    name: "Hugo van Kemenade",
    title: "Can count your bicycles",
    email: "hugo@deadsetbit.com",
    cv: "https://www.google.com/",
    linkedin: "https://www.linkedin.com/",
    description1:
      "Hugo ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac gravida mi. Suspendisse nec purus varius, malesuada massa non, condimentum mi. Aenean non sagittis placerat.",
    description2:
      "Phasellus semper mi quis tempor varius. Fusce cursus eros dui, eget accumsan libero ullamcorper nec. Integer gravida interdum ex, sed tincidunt mi interdum eget. Duis non leo.",
  },
  petri: {
    img: "assets/employeesSection/petri.webp",
    name: "Petri Teittinen",
    title: "Has more tech than you",
    email: "petri@deadsetbit.com",
    phone: "+358 40 123 4567",
    cv: "https://www.google.com/",
    linkedin: "https://www.linkedin.com/",
    description1:
      "Petri ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac gravida mi. Suspendisse nec purus varius, malesuada massa non, condimentum mi. Aenean non sagittis placerat.",
    description2:
      "Phasellus semper mi quis tempor varius. Fusce cursus eros dui, eget accumsan libero ullamcorper nec. Integer gravida interdum ex, sed tincidunt mi interdum eget. Duis non leo.",
  },
};

export default employees;
