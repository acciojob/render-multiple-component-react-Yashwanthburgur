import React from "react";
import "./styles.css";

function App() {
  const projects = [
    {
      name: "Portfolio Website",
      description: "Personal portfolio showcasing React projects and skills."
    },
    {
      name: "Blog Platform",
      description: "Full-featured blog with Markdown editor and comments."
    },
    {
      name: "Fitness Tracker",
      description: "Track workouts, calories, and progress with charts."
    }
  ];

  return (
    <div className="ns-wrapper">
      {projects.map((project, index) => (
        <div key={index}>
          <h1 data-ns-test="project-name">{project.name}</h1>
          <h6 data-ns-test="project-description">{project.description}</h6>
        </div>
      ))}
    </div>
  );
}

export default App;
