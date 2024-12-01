import React from "react";
import { HomeComponent } from "./components/Home/Home.component";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ProjectsComponent } from "./components/Projects/Projects.component";
import { CVComponent } from "./components/CV/CV.component";
import { BooksComponent } from './components/Books/Books.component';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/projects" element={<ProjectsComponent />} />
        <Route path="/books" element={<BooksComponent />} />
        <Route path="/cv" element={<CVComponent />} />
        <Route path="/" element={<HomeComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
