import "./App.css";
import Nav from "./components/Nav";
import Projects from "./pages/Projects";

function App() {
  return (
    <section className="app">
      <Projects
        title="WEBSITES"
        container="projects-grid"
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
      <Nav />
    </section>
  );
}

export default App;
