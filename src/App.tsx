import "./App.css";
import { useState } from "react";
import Nav from "./components/Nav";
import Projects from "./pages/Projects";
import type { Categories } from "./data/types";

function App() {
  const [activeCategory, setActiveCategory] = useState<Categories>("websites");
  return (
    <section className="app">
      <Projects
        title={activeCategory.toUpperCase()}
        containerType="projects-grid"
        projects={[
          {
            id: 1,
            name: "Project One",
            description: "Description for project one",
            link: "#",
            img: "img1.png",
          },
          {
            id: 2,
            name: "Project Two",
            description: "Description for project two",
            link: "#",
            img: "img2.png",
          },
        ]}
      />
      <Nav
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
    </section>
  );
}

export default App;
