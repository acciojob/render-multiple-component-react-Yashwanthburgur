import React from "react";
import "./styles.css";

function App() {
  const projects = [
    {
      name: "Portfolio Website 🚀",
      description: "Personal portfolio showcasing React projects and skills with animations."
    },
    {
      name: "Blog Platform 📝",
      description: "Full-featured blog with Markdown editor, comments, and SEO optimization."
    },
    {
      name: "Fitness Tracker 💪",
      description: "Track workouts, calories, progress charts, and set personal goals."
    },
    {
      name: "E-Commerce Store 🛒",
      description: "Full-stack MERN shopping cart with Stripe payments and admin dashboard."
    },
    {
      name: "Task Manager 📋",
      description: "Real-time collaborative to-do app with drag-drop and notifications."
    }
  ];

  return (
    <div className="ns-wrapper">
      <h2>🚀 My Dream MERN Projects (Day 1/365)</h2>
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h1 data-ns-test="project-name">{project.name}</h1>
          <h6 data-ns-test="project-description">{project.description}</h6>
        </div>
      ))}
    </div>
  );
}

export default App;
