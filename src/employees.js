/**
 * This file contains the information shown in the employeeInfoContainer.
 * This is not to be confused with the employeeCards which are statically in the HTML.
 *
 * To add an employee, create a new employeeCard inside employeeContainer in template.html with their name as the id (all lowercase).
 * Then, create a new record inside the employees object following the format below. REMEMBER TO NAME IT THE SAME AS THE ID OF THE CARD (EMPLOYEE NAME):
 *
 *   name:{
 *     img: "assets/employeesSection/yourImage.webp",
 *     name: "Your Name",
 *     title: "Your Title",
 *     social: {
 *       email: "name@deadsetbit.com",
 *       cv: "https://www.google.com/",
 *       linkedin: "https://www.linkedin.com/",
 *     },
    descriptions: [
      "You can add text here, each string is 1 paragraph.. So this is the first paragraph.",
      "And here is the second paragraph!",
    ],
 *   },
 *  
 *  Remember case sensitivity!
 * 
 *  Different social media or contact links can be added to the social object as needed. 
 *  If a social field is added and there is no icon that represents the field, it will default to a defaultIcon. This will cause console error because the icon initially searched for is not found.
 *  If you want to add a new icon, you need to add it to the assets/employeesSection directory, with the same name as the field. e.g., github.svg (!!!REMEMBER CASE SENSITIVE!!!)
 *  Make sure the icon is a .svg file.
 *  If for some reason you want to add a icon that is different format, you need to change all the icons to the same format and change the code in the updateInfo function in index.js to search for the new format instead of svg
 * 
 * If you don't want to add any socials for someone, just leave the social object empty. Deleting it crashes the page.
 * 
 * In the descriptions array you can add as many paragraphs as you want.
 * One string in the array will be one paragraph rendered on the page
 * Each string should be in their own row and separated by a comma.
 *
 */
const employees = {
  pauli: {
    img: "assets/employeesSection/pauli.webp",
    name: "Pauli Ervi",
    title: "The Original Bit",
    social: {
      // email: "pauli@deadsetbit.com",
      // cv: "https://www.google.com/",
      // linkedin: "https://www.linkedin.com/",
    },
    descriptions: [
      "Pauli is a proficient full-stack software architect boasting 20 years of experience in crafting solutions across web, native, embedded, and mobile development domains. In his context, 'full-stack' encompasses a broad spectrum, starting from operating system boot loaders and extending to end-user graphical interfaces and websites. Specializing in delivering comprehensive solutions, he excels in advising clients on particularly complex development projects. Currently, Pauli is overseeing the architecture of Haltian Empathic Building IoT solution. His working languages are Finnish and English.",
    ],
  },

  jasu: {
    img: "assets/employeesSection/jasu.webp",
    name: "Yacine Ouarab",
    title: "Trusty lieutenant",
    social: {
      // email: "jasu@deadsetbit.com",
      // phone: "+358 40 123 4567",
      // cv: "https://www.google.com/",
      // linkedin: "https://www.linkedin.com/",
      // github: "https://github.com/",
      // gitlab: "https://gitlab.com/",
    },
    descriptions: [
      "Jasu is a senior front-end developer with a decade of commercial experience in web services development. Over the past six years, Jasu has led a technical team of 4 to 16 members, working on a prominent IoT data visualization digital twin product. Jasu excels in both hands-on technical roles and in bridging the gap between business objectives and technical requirements. While primarily focused on the JavaScript ecosystem, Jasu also brings experience in Java-based web applications to the table.",
      "As a colleague, Jasu is known for being approachable and results-driven. Beyond the realm of technology, Jasu is pursuing a law degree at the University of Helsinki, specializing in IT law. He serves as a board member of the Finnish IT Law Association, demonstrating his dedication to advancing the intersection of technology and jurisprudence in his many roles. Jasu’s working languages are Finnish and English.",
    ],
  },

  nick: {
    img: "assets/employeesSection/nikki.webp",
    name: "Nick Kononov",
    title: "The Hearty Hacker",
    social: {
      // email: "nick@deadsetbit.com",
      // phone: "+358 40 123 4567",
      // cv: "https://www.google.com/",
      // linkedin: "https://www.linkedin.com/",
      // github: "https://github.com/",
      // gitlab: "https://gitlab.com/",
    },
    descriptions: [
      "Nick is a skilled full-stack developer with 7 years of experience in creating engaging user interfaces and ensuring seamless backend operations. Over the past 5 years, his focus has primarily been on developing Python backends along with various JavaScript and TypeScript frontends. In his work with Python, Nick has developed numerous integrations for a leading IoT platform, effectively combining sensor data from multiple sources. Additionally, he has experience with integrating to Microsoft Graph APIs.",
      "Beyond the Python and JavaScript ecosystems, Nick is also proficient in native Android development using Kotlin. As a colleague, he is a passionate technology advocate, always eager to demonstrate and discuss the latest advancements in the tech world. Nick’s working language is English.",
    ],
  },

  jonna: {
    img: "assets/employeesSection/jonna.webp",
    name: "Jonna Salomaa",
    title: "The Dream Master",
    social: {
      // email: "jonna@deadsetbit.com",
      // phone: "+358 40 123 4567",
      // cv: "https://www.google.com/",
      // linkedin: "https://www.linkedin.com/",
      // devianArt: "https://www.deviantart.com/",
    },

    descriptions: [
      "Jonna is a versatile artist with talents spanning both 2D & 3D graphics, animation, and UI design, as well as an aspiring architect. Her passion and background are rooted in the games and animation industry, but in recent years, she has expanded her expertise to user interface design and graphics for various IT consultancy projects. In these roles, she is accustomed to collaborating as part of larger development teams.",
      "In addition to her graphical prowess, Jonna is currently furthering her education as an Architecture student at the University of Tampere. Jonna’s working languages are Finnish and English.",
    ],
  },

  simo: {
    img: "assets/employeesSection/simo.webp",
    name: "Simo Jokela",
    title: "Activated his trap card",
    social: {
      // email: "simo@deadsetbit.com",
      // phone: "+358 40 123 4567",
    },
    descriptions: [
      "Simo is a seasoned software architect with 14 years of commercial experience in developing scalable JavaScript applications. His expertise encompasses a range of technologies including JavaScript, TypeScript, React, Drupal, REST APIs, and GraphQL. Over the past five years, Simo has successfully led various projects, notably in eCommerce and IoT data visualization application development.",
      "Known for his results-oriented approach, Simo excels in interpreting business needs and converting them into precise technical requirements. He has a strong passion for crafting well-functioning user interfaces, a skill he pairs with his enjoyment of a good pint of beer. Simo’s working languages are Finnish and English.",
    ],
  },

  antti: {
    img: "assets/employeesSection/antti.webp",
    name: "Antti Luukka",
    title: "The Impostor",
    social: {
      // cv: "https://www.google.com/",
      // linkedin: "https://www.linkedin.com/",
    },
    descriptions: [
      "Antti is a seasoned developer, boasting over 16 years of commercial experience in front-end, back-end, and desktop applications and systems. His comprehensive understanding of both front-end and back-end systems enables him to adeptly navigate and integrate various aspects of application development. This expertise is particularly valuable when planning the architecture and features of projects, especially under tight schedules and with ambiguous requirements. Antti is known for his ability to bring clarity and calmness to any project he is involved in.",
      "In addition to his professional accomplishments, Antti is a passionate game developer. He has independently developed a Retrowave-inspired 3D multiplayer racing game, demonstrating his proficiency in Unity and Blender. Antti’s working languages are Finnish and English.",
    ],
  },

  christopher: {
    img: "assets/employeesSection/toffe.webp",
    name: "Christopher Harju",
    title: "The Toffe",
    social: {
      // cv: "https://www.google.com/",
      // linkedin: "https://www.linkedin.com/",
      // github: "https://github.com/",
      // gitlab: "https://gitlab.com/",
    },

    descriptions: [
      "Christopher is a passionate full-stack software developer, currently specializing in front-end applications. His proactive, can-do attitude, combined with the ability to prioritize effectively even under tight deadlines, makes him an ideal lead developer for challenging projects.",
      "Christopher holds a Master's degree in Psychology from Åbo Akademi University. This academic background in psychology, coupled with his computer science studies at the University of Helsinki, uniquely positions Christopher to translate customer requirements into actionable items and technical specifications. His diverse expertise bridges the gap between technical development and understanding user needs. Christopher’s working languages are Finnish, English & Swedish.",
    ],
  },
  alex: {
    img: "assets/employeesSection/alex.webp",
    name: "Alex Grönholm",
    title: "The Python Charmer",
    social: {
      // email: "alex@deadsetbit.com",
      // phone: "+358 40 123 4567",
      // cv: "https://www.google.com/",
      // linkedin: "https://www.linkedin.com/",
      // github: "https://github.com/",
      // gitlab: "https://gitlab.com/",
    },
    descriptions: [
      "Alex is a senior backend architect with a robust 19 years of experience in commercial development. Over the last seven years, Alex has played a pivotal role in developing a scalable, cloud vendor-agnostic, high-volume backend. This system is designed to collect measurement data from sensors and stream it efficiently. Alex is proficient in working with time-series data, MQTT, Kubernetes, REST APIs, and PostgreSQL on a daily basis.",
      "In addition to his architectural expertise, Alex is a Python guru and the author of several popular Python open-source libraries, including anyio and apscheduler. These libraries are highly regarded in the Python community, with more than approximately 70 million downloads per month, a testament to their utility and Alex's skill as a developer. Alex’s working languages are Finnish and English.",
    ],
  },

  hugo: {
    img: "assets/employeesSection/hugo.webp",
    name: "Hugo van Kemenade",
    title: "Can count your bicycles",
    social: {
      // email: "hugo@deadsetbit.com",
      // phone: "+358 40 123 4567",
      // cv: "https://www.google.com/",
      // linkedin: "https://www.linkedin.com/",
      // github: "https://github.com/",
    },
    descriptions: [
      "Hugo is an exceptional developer with 23 years of commercial experience in mobile, embedded, and web services development. A Fellow of the Python Software Foundation and a Core Developer of the Python programming language, Hugo has made significant contributions to the field. He is the author of several widely-used Python open-source libraries, including the Pillow imaging library, which boasts approximately 70 million downloads monthly. Collectively, the libraries maintained or co-maintained by Hugo are downloaded over 100 million times per month by Python developers.",
      "Hugo holds certifications as a Scrum Product Owner, ScrumMaster, and AWS Cloud Practitioner, and possesses extensive experience with large-scale Drupal projects. Hugo’s working language is English.",
    ],
  },

  petri: {
    img: "assets/employeesSection/petri.webp",
    name: "Petri Teittinen",
    title: "Has more tech than you",
    social: {
      // email: "petri@deadsetbit.com",
      // phone: "+358 40 123 4567",
      // cv: "https://www.google.com/",
      // linkedin: "https://www.linkedin.com/",
    },
    descriptions: [
      "Petri is an expert in the realm of physical technology, or hardware. His career began in tech journalism in 1986, where he produced content for several well-known technology magazines. Known for his diligence and efficiency, Petri is always prepared to take initiative when necessary. His ability to communicate complex technical concepts in a manner accessible to non-technical audiences has repeatedly proven invaluable, particularly in customer meetings.",
      "Petri approaches problem-solving with creative, out-of-the-box thinking. As a colleague, he is known for being attentive, patient, constructive, and sympathetic, always willing to help. He firmly believes that open and honest communication is the cornerstone of success in both personal and professional interactions. Petri’s working languages are Finnish and English.",
    ],
  },

  anne: {
    img: "assets/employeesSection/anne.webp",
    name: "Anne Kotiranta",
    title: "Office Queen",
    social: {
      // email: "anne@deadsetbit.com",
      // phone: "+358 40 123 4567",
      // cv: "https://www.google.com/",
      // linkedin: "https://www.linkedin.com/",
    },
    descriptions: [
      "Anne has her background in management assistance (BBA) and has worked in both private and public sectors, mostly in administrative roles. She is into things running smoothly and people running wild and loves seeing diverse teams and companies that can handle it. ",
      "Anne took a short detour from administrative work to study agriculture and sustainability, but returned to rule over an office after completing her Bachelor's. She still keeps a keen eye on the subject matter and dreams of sheep.",
    ],
  },
  //add the next employee here
};

export default employees;
