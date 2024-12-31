import React from "react";
import '../../styles/styles.css';
import { Header } from "../Shared/Header.component";
import { Sidebar } from "../Shared/Sidebar.component";

export const ProjectsComponent = () => {
    return (
    <div>
      <Header />
      <Body />
    </div>
  )
};

const Body = () => {
  return (
    <div id="main" role="main">
      <Sidebar />
      <MainPage />
    </div>
  );
}

const MainPage = () => {}