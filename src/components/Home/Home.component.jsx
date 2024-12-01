import React from "react";
import './Home.component.css';

export const HomeComponent = () => {
    return (
      <div className="masthead">
        <div className="masthead__inner-wrap">
          <div className="masthead__menu">
            <nav id="site-nav" className="greedy-nav">
              <ul className="visible-links">
                <li className="masthead__menu-item masthead__menu-item--lg"><a href="https://hoffmann-muki.github.io/">Hoffmann Muki</a></li>
                <li className="masthead__menu-item"><a href="https://hoffmann-muki.github.io//projects/">Projects</a></li>
                <li className="masthead__menu-item"><a href="https://hoffmann-muki.github.io/hobbies">Hobbies</a></li>
                <li className="masthead__menu-item"><a href="https://hoffmann-muki.github.io/cv/">CV</a></li>
              </ul>
            </nav>
        </div>
      </div>
    </div>
  )
};
