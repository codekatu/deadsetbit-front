/**
 * This file contains the information shown in the employeeInfoContainer.
 * This is not to be confused with the employeeCards which are statically in the HTML.
 *
 * If you want to add a employee, you also need to create them a employeeCard with their name as the id.
 *
 * then you can create a new object in this file with the following format:
 *
 *   name:{
 *     img: "assets/employeesSection/yourImage.webp",
 *     name: "Your Name",
 *     title: "Your Title",
 *     social: {
 *       email: "pauli@deadsetbit.com",
 *       cv: "https://www.google.com/",
 *       linkedin: "https://www.linkedin.com/",
 *     },
    descriptions: [
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac gravida mi. Suspendisse nec purus varius, malesuada massa non, condimentum mi. Aenean non sagittis placerat t, consectetur adipiscing.",
      "Phasellus semper mi quis tempor varius. Fusce.  cincidunt mi interdum eget. Duis non lcidunt mi interdum eget. Duis non leo.",
    ],
 *   },
 *  
 *  different social media or contact links can be added to the social object as needed. 
 *  If a field is added and there is no icon that represents the field, it will default to a defaultIcon.
 *  If you want to add a new icon, you need to add it to the assets/employeesSection directory, with the same name as the field. eg github.png
 *  Make sure the icon is a .png file and is 24x24 pixels.
 * 
 * in the description field you can add new paragraphs by adding a new string to the array(remember to add , att the end ). 
 *
 */
const employees = {
  pauli: {
    img: "assets/employeesSection/pauli.webp",
    name: "Pauli Ervi",
    title: "The Original Bit",
    social: {
      email: "pauli@deadsetbit.com",
      cv: "https://www.google.com/",
      linkedin: "https://www.linkedin.com/",
    },
    descriptions: [
      "Pauli ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac gravida mi. Suspendisse nec purus varius, malesuada massa non, condimentum mi. Aenean non sagittis placerat t, consectetur adipiscing.",
      "Phasellus semper mi quis tempor varius. Fusce.  cincidunt mi interdum eget. Duis non lcidunt mi interdum eget. Duis non leo.",
    ],
  },
  jasu: {
    img: "assets/employeesSection/jasu.webp",
    name: "Yacine Ouarab",
    title: "Trusty lieutenant",
    social: {
      email: "jasu@deadsetbit.com",
      phone: "+358 40 123 4567",
      cv: "https://www.google.com/",
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
      gitlab: "https://gitlab.com/",
      twitter: "https://twitter.com/",
    },
    descriptions: [
      "Jasu ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac gravida mi. Suspendisse nec purus varius, malesuada massa non, condimentum mi. Aenean non sagittis placerat t, consectetur adipiscing.",
      "Phasellus semper mi quis tempor varius. Fusce.  cincidunt mi interdum eget. Duis non lcidunt mi interdum eget. Duis non leo.",

      "Phasellus semper mi quis tempor varius. Fusce.  cincidunt mi interdum eget. Duis non lcidunt mi interdum eget. Duis non leo.",
    ],
  },
  nick: {
    img: "assets/employeesSection/nikki.webp",
    name: "Nick Kononov",
    title: "The Hearty Hacker",
    social: {
      email: "nick@deadsetbit.com",
      phone: "+358 40 123 4567",
      cv: "https://www.google.com/",
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
      gitlab: "https://gitlab.com/",
      twitter: "https://twitter.com/",
    },
    descriptions: [
      "nick ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac gravida mi. Suspendisse nec purus varius, malesuada massa non, condimentum mi. Aenean non sagittis placerat t, consectetur adipiscing.",
      "Phasellus semper mi quis tempor varius. Fusce.  cincidunt mi interdum eget. Duis non lcidunt mi interdum eget. Duis non leo.",
    ],
  },
  jonna: {
    img: "assets/employeesSection/jonna.webp",
    name: "Jonna Salomaa",
    title: "The Dream Master",
    social: {
      email: "jonna@deadsetbit.com",
      phone: "+358 40 123 4567",
      cv: "https://www.google.com/",
      linkedin: "https://www.linkedin.com/",
      devianArt: "https://www.deviantart.com/",
      twitter: "https://twitter.com/",
    },

    descriptions: [
      "jonna ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac gravida mi. Suspendisse nec purus varius, malesuada massa non, condimentum mi. Aenean non sagittis placerat t, consectetur adipiscing.",
      "Phasellus semper mi quis tempor varius. Fusce.  cincidunt mi interdum eget. Duis non lcidunt mi interdum eget. Duis non leo.",
    ],
  },
  simo: {
    img: "assets/employeesSection/simo.webp",
    name: "Simo Jokela",
    title: "Activated his trap card",
    social: {
      email: "simo@deadsetbit.com",
      phone: "+358 40 123 4567",
    },
    descriptions: [
      "simo ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac gravida mi. Suspendisse nec purus varius, malesuada massa non, condimentum mi. Aenean non sagittis placerat t, consectetur adipiscing.",
      "Phasellus semper mi quis tempor varius. Fusce.  cincidunt mi interdum eget. Duis non lcidunt mi interdum eget. Duis non leo.",
    ],
  },
  antti: {
    img: "assets/employeesSection/antti.webp",
    name: "Antti Luukka",
    title: "The Impostor",
    social: {
      cv: "https://www.google.com/",
      linkedin: "https://www.linkedin.com/",
    },
    descriptions: [
      "antti ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac gravida mi. Suspendisse nec purus varius, malesuada massa non, condimentum mi. Aenean non sagittis placerat t, consectetur adipiscing.",
      "Phasellus semper mi quis tempor varius. Fusce.  cincidunt mi interdum eget. Duis non lcidunt mi interdum eget. Duis non leo.",
    ],
  },

  christopher: {
    img: "assets/employeesSection/toffe.webp",
    name: "Christopher Harju",
    title: "The Toffe",
    social: {
      cv: "https://www.google.com/",
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
      gitlab: "https://gitlab.com/",
      twitter: "https://twitter.com/",
    },

    descriptions: [
      "toffe ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac gravida mi. Suspendisse nec purus varius, malesuada massa non, condimentum mi. Aenean non sagittis placerat t, consectetur adipiscing.",
      "Phasellus semper mi quis tempor varius. Fusce.  cincidunt mi interdum eget. Duis non lcidunt mi interdum eget. Duis non leo.",
    ],
  },
  alex: {
    img: "assets/employeesSection/alex.webp",
    name: "Alex Grönholm",
    title: "The Python Charmer",
    social: {
      email: "alex@deadsetbit.com",
      phone: "+358 40 123 4567",
      cv: "https://www.google.com/",
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
      gitlab: "https://gitlab.com/",
    },
    descriptions: [
      "alex ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac gravida mi. Suspendisse nec purus varius, malesuada massa non, condimentum mi. Aenean non sagittis placerat t, consectetur adipiscing.",
      "Phasellus semper mi quis tempor varius. Fusce.  cincidunt mi interdum eget. Duis non lcidunt mi interdum eget. Duis non leo.",
    ],
  },
  hugo: {
    img: "assets/employeesSection/hugo.webp",
    name: "Hugo van Kemenade",
    title: "Can count your bicycles",
    social: {
      email: "hugo@deadsetbit.com",
      phone: "+358 40 123 4567",
      cv: "https://www.google.com/",
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
      twitter: "https://twitter.com/",
    },
    descriptions: [
      "hugo ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac gravida mi. Suspendisse nec purus varius, malesuada massa non, condimentum mi. Aenean non sagittis placerat t, consectetur adipiscing.",
      "Phasellus semper mi quis tempor varius. Fusce.  cincidunt mi interdum eget. Duis non lcidunt mi interdum eget. Duis non leo.",
    ],
  },
  petri: {
    img: "assets/employeesSection/petri.webp",
    name: "Petri Teittinen",
    title: "Has more tech than you",
    social: {
      email: "petri@deadsetbit.com",
      phone: "+358 40 123 4567",
      cv: "https://www.google.com/",
      linkedin: "https://www.linkedin.com/",
      twitter: "https://twitter.com/",
    },
    descriptions: [
      "petri ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac gravida mi. Suspendisse nec purus varius, malesuada massa non, condimentum mi. Aenean non sagittis placerat t, consectetur adipiscing.",
      "Phasellus semper mi quis tempor varius. Fusce.  cincidunt mi interdum eget. Duis non lcidunt mi interdum eget. Duis non leo.",
    ],
  },
  anne: {
    img: "assets/employeesSection/anne.webp",
    name: "Anne Kotiranta",
    title: "Placeholder",
    social: {
      email: "anne@deadsetbit.com",
      phone: "+358 40 123 4567",
      cv: "https://www.google.com/",
      linkedin: "https://www.linkedin.com/",
      twitter: "https://twitter.com/",
    },
    descriptions: [
      "Anne ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac gravida mi. Suspendisse nec purus varius, malesuada massa non, condimentum mi. Aenean non sagittis placerat t, consectetur adipiscing.",
      "Phasellus semper mi quis tempor varius. Fusce.  cincidunt mi interdum eget. Duis non lcidunt mi interdum eget. Duis non leo.",
    ],
  },
};

export default employees;
