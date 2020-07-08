/*********************WORK IMGS **********************/
import erebusUrl from "./assets/work/erebus.jpg";
import nbgUrl from "./assets/work/nbg.jpg";
import cityNestUrl from "./assets/work/cityNest.jpg";
import contactBookUrl from "./assets/work/contactBook.jpg";
/***************************************************/

/*********************DETAILS IMGS **********************/
/*********************  NBG **********************/
import nbgImac from "./assets/projects/nbgImac.png";
import nbgBig from "./assets/projects/nbg.png";
import nbgGroup from "./assets/projects/nbgGroup.png";
import nbgMob from "./assets/projects/nbgMob.png";
/********************* CITY NEST **********************/
import nestImac from "./assets/projects/nestImac.png";
import nestBig from "./assets/projects/nest.png";
import nestGroup from "./assets/projects/nestGroup.png";
import nestMob from "./assets/projects/nestMob.png";
/********************* EREBUS **********************/
import erbImac from "./assets/projects/erbImac.png";
import erbBig from "./assets/projects/erb.png";
import erbGroup from "./assets/projects/erbGroup.png";
import erbMob from "./assets/projects/erbMob.png";
/***************************************************/
/********************* CONTACT BOOK **********************/
import contactsImac from "./assets/projects/contactsImac.png";
import contactsBig from "./assets/projects/contacts.png";
import contactsGroup from "./assets/projects/contactsGroup.png";
import contactsMob from "./assets/projects/contactsMob.png";
/***************************************************/

/*******************OTHER PROJECTS************************/
import erebusSmall from "./assets/projects/erebusSmall.jpg";
import nbgSmall from "./assets/projects/nbgSmall.jpg";
import cityNestSmall from "./assets/projects/cityNestSmall.jpg";
import contactsSmall from "./assets/projects/contactsSmall.jpg";
/*********************************************************/

export default [
  {
    id: 1,
    name: "contacts",
    title: "Contact Book",
    imgUrl: contactBookUrl,
    code: "https://github.com/io62s/contact-book",
    projectDetails: {
      aboutClient: "Contact keeping app",
      aboutProject:
        "A personal project, an MERN stack app for keeping contacts. Create, edit, delete contacts, sort by type, name...Web Technologies used: FrontEnd - Html, Css, JavaScript, ReactJs. BackEnd - NodeJs, Express, MongoDB",
      clientUrl: "https://contact-book-app-mern.herokuapp.com/",
      iMac: contactsImac,
      big: contactsBig,
      group: contactsGroup,
      mob: contactsMob,
      other: [
        { name: "city-nest", smallUrl: cityNestSmall },
        { name: "erebus", smallUrl: erebusSmall },
        { name: "nbg", smallUrl: nbgSmall },
      ],
    },
  },

  {
    id: 2,
    name: "city-nest",
    title: "City Nest",
    imgUrl: cityNestUrl,
    code: "",
    projectDetails: {
      aboutClient:
        "City Nest was created as a response to needs of a modern tourist and new trends in hotel management.",
      aboutProject:
        "My responsibility for this project was to convert Photoshop mockups into a functional website using Html, Css, and JavaScript.",
      clientUrl: "http://www.citynest.rs/",
      iMac: nestImac,
      big: nestBig,
      group: nestGroup,
      mob: nestMob,
      other: [
        { name: "contacts", smallUrl: contactsSmall },
        { name: "erebus", smallUrl: erebusSmall },
        { name: "nbg", smallUrl: nbgSmall },
      ],
    },
  },
  {
    id: 3,
    name: "erebus",
    title: "Erebus",
    imgUrl: erebusUrl,
    code: "https://github.com/io62s/maat",
    projectDetails: {
      aboutClient:
        "Erebus is a lifestyle brand based in Belgrade. The company primarily produces clothing for young men and women.",
      aboutProject:
        "A personal project, concept for an ecommerce fashion store. Web Technologies used: Html, Css, Sass, JavaScript, ReactJs, Redux. Integrated stripe payment.",
      clientUrl: "https://erebus-clothing.netlify.com/",
      iMac: erbImac,
      big: erbBig,
      group: erbGroup,
      mob: erbMob,
      other: [
        { name: "city-nest", smallUrl: cityNestSmall },
        { name: "contacts", smallUrl: contactsSmall },
        { name: "nbg", smallUrl: nbgSmall },
      ],
    },
  },
  {
    id: 4,
    name: "nbg",
    title: "NBG",
    imgUrl: nbgUrl,
    code: "https://github.com/io62s/nbg-demo",
    projectDetails: {
      aboutClient:
        "NBG is an Serbian punk rock band from Belgrade,  formed in 1984.",
      aboutProject:
        "NBG, a popular punk rock band offered me the opportunity to design their personal website for professional advantages. The design was completed by utilizing Photoshop and Figma. Web technologies used: Html, Css and JavaScript.",
      clientUrl: "https://nbgpunk.netlify.app/",
      iMac: nbgImac,
      big: nbgBig,
      group: nbgGroup,
      mob: nbgMob,
      other: [
        { name: "city-nest", smallUrl: cityNestSmall },
        { name: "contacts", smallUrl: contactsSmall },
        { name: "erebus", smallUrl: erebusSmall },
      ],
    },
  },
];
