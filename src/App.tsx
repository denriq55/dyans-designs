import "./App.css";
import { useState } from "react";
import Nav from "./components/Nav";
import Projects from "./pages/MainPage";
import type { Categories, Project } from "./data/types";
import { websites } from "./data/websites";
import { ux } from "./data/ux";
import { misc } from "./data/misc";
import { visuals } from "./data/visuals";

function App() {
  const [activeCategory, setActiveCategory] = useState<Categories>("websites");
  const categoryProjects: Record<Categories, Project[]> = {
    websites: websites,
    ux: ux,
    visuals: visuals,
    misc: misc,
  };
  return (
    <section className="app">
      <Nav
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <Projects
        category={activeCategory}
        projects={categoryProjects[activeCategory]}
      />
    </section>
  );
}

export default App;
