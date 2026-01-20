import type React from "react";
import type { Categories } from "../../data/types";
import "./index.css";
import type { SetStateAction } from "react";

interface NavProps {
  activeCategory: Categories;
  setActiveCategory: React.Dispatch<SetStateAction<Categories>>;
}
export default function Nav({ activeCategory, setActiveCategory }: NavProps) {
  return (
    <nav className="nav-container">
      <ul>
        <li
          onClick={() => setActiveCategory("websites")}
          className={activeCategory === "websites" ? "active" : ""}
        >
          <div>Websites</div>
        </li>
        <li
          onClick={() => setActiveCategory("ux")}
          className={activeCategory === "ux" ? "active" : ""}
        >
          <div>UX</div>
        </li>
        <li
          onClick={() => setActiveCategory("visuals")}
          className={activeCategory === "visuals" ? "active" : ""}
        >
          <div>Visuals</div>
        </li>
        <li
          onClick={() => setActiveCategory("misc")}
          className={activeCategory === "misc" ? "active" : ""}
        >
          <div>Misc</div>
        </li>
      </ul>
    </nav>
  );
}
