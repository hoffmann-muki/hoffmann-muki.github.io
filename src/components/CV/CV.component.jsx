import React from "react";
import '../../styles/styles.css';
import './cv.styles.css';
import { Header } from "../Shared/Header.component";
import { Sidebar } from "../Shared/Sidebar.component";

export const CVComponent = () => {
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

const MainPage = () => {
    return (
        <div class="iframe-container">
            <iframe src="assets/Hoffmann_Muki_CV.pdf" width="750" height="800"></iframe>
        </div>
    )
}