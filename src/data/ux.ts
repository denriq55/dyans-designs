import type { Project } from "./types";
import jrtImg from "../assets/images/websites/jrt.png";
import kuboImg from "../assets/images/websites/kubo.png";
import urban from "../assets/images/websites/urban.png";
import sabor from "../assets/images/websites/sabor.png";

export const ux: Project[] = [
  {
    id: 1,
    name: "Kubo Travels",
    description: "Travel agency website",
    link: "kubotravels.com",
    img: kuboImg,
  },
  {
    id: 2,
    name: "JRT Motors",
    description: "Independent car seller website",
    link: "jrtmotors.com",
    img: jrtImg,
  },
  {
    id: 3,
    name: "Urban Care Transport",
    description: "Non-emergency medical transportation service website",
    link: "www.urbancaretransportation.com",
    img: urban,
  },
  {
    id: 3,
    name: "Indian Sabor",
    description: "Indian restaurant website",
    link: "sunny-trifle-225730.netlify.app",
    img: sabor,
  },
];
