import React from "react";
import { HomeComponent } from "./components/Home/Home.component";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProjectsComponent } from "./components/Projects/Projects.component";
import { CVComponent } from "./components/CV/CV.component";
import { HobbiesComponent } from "./components/Hobbies/Hobbies.component";

const App = () => {
  return (
    <Router basename="/hoffmann.muki.github.io"> {/* Base URL for GitHub Pages */}
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/projects" element={<ProjectsComponent />} />
        <Route path="/hobbies" element={<HobbiesComponent />} />
        <Route path="/cv" element={<CVComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
