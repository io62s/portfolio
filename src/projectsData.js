/*********************WORK IMGS **********************/
import erebusUrl from "./assets/work/erebus.jpg";
import uiPaletteUrl from "./assets/work/palettes.jpg";
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
/********************* UI PALETTES **********************/
import pltsImac from "./assets/projects/pltsImac.png";
import pltsBig from "./assets/projects/plts.png";
import pltsGroup from "./assets/projects/pltsGroup.png";
import pltsMob from "./assets/projects/pltsMob.png";
/***************************************************/
/********************* CONTACT BOOK **********************/
import contactsImac from "./assets/projects/contactsImac.png";
import contactsBig from "./assets/projects/contacts.png";
import contactsGroup from "./assets/projects/contactsGroup.png";
import contactsMob from "./assets/projects/contactsMob.png";
/***************************************************/

/*******************OTHER PROJECTS************************/
import erebusSmall from "./assets/projects/erebusSmall.jpg";
import palettesSmall from "./assets/projects/palettesSmall.jpg";
import nbgSmall from "./assets/projects/nbgSmall.jpg";
import cityNestSmall from "./assets/projects/cityNestSmall.jpg";
/*********************************************************/

export default [
  {
    id: 1,
    name: "nbg",
    title: "NBG",
    imgUrl: nbgUrl,
    projectDetails: {
      aboutClient:
        "NBG is an Serbian punk rock band from Belgrade,  formed in 1984.",
      aboutProject:
        "NBG, a popular punk rock band offered me the opportunity to design their personal website for professional advantages. The design was completed by utilizing Photoshop and Figma. Web technologies used: Html, Css and JavaScript.",
      clientUrl: "http://www.nbgpunk.com/",
      iMac: nbgImac,
      big: nbgBig,
      group: nbgGroup,
      mob: nbgMob,
      other: [
        { name: "city-nest", smallUrl: cityNestSmall },
        { name: "erebus", smallUrl: erebusSmall },
        { name: "ui-palettes", smallUrl: palettesSmall },
      ],
    },
  },
  {
    id: 2,
    name: "city-nest",
    title: "City Nest",
    imgUrl: cityNestUrl,
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
        { name: "nbg", smallUrl: nbgSmall },
        { name: "erebus", smallUrl: erebusSmall },
        { name: "ui-palettes", smallUrl: palettesSmall },
      ],
    },
  },
  {
    id: 3,
    name: "erebus",
    title: "Erebus",
    imgUrl: erebusUrl,
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
        { name: "nbg", smallUrl: nbgSmall },
        { name: "city-nest", smallUrl: cityNestSmall },
        { name: "ui-palettes", smallUrl: palettesSmall },
      ],
    },
  },
  {
    id: 4,
    name: "ui-palettes",
    title: "Ui Palettes",
    imgUrl: uiPaletteUrl,
    projectDetails: {
      aboutClient: "Create custom color palettes for UI / Web design.",
      aboutProject:
        "A personal project, an app for creating custom color palettes for designers. Addition to that you can create custom colors and copy color codes as hex, rgb or rgba. Web Technologies used: Html, Css, Sass, JavaScript, ReactJs.",
      clientUrl: "https://ui-palettes.netlify.com/",
      iMac: pltsImac,
      big: pltsBig,
      group: pltsGroup,
      mob: pltsMob,
      other: [
        { name: "nbg", smallUrl: nbgSmall },
        { name: "city-nest", smallUrl: cityNestSmall },
        { name: "erebus", smallUrl: erebusSmall },
      ],
    },
  },
];
