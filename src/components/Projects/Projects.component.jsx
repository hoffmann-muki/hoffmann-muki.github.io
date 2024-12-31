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

const MainPage = () => {
    return (
        <article class="page" itemscope="" itemtype="http://schema.org/CreativeWork">
            <div itemprop="headline" content="Projects">
                <div itemprop="description" content="">
                    <div class="page__inner-wrap">
                        <section class="page__content" itemprop="text">
                            <List />
                        </section>
                    </div>
                </div>
            </div>
        </article>
    );
}

const List = () => {
    return (
      <>
        <div>
          <h5>A few projects I worked on</h5>
          <h2>1. PremierDev Social Enteprise (founded 2020)</h2>
          <em>Co-founders: Elvis Neba, Ramish Shu, Roy Tiku, Reynald Liyeuk, Joy Mambo</em>
          <br/>
          <em>Country Ambassador: Ngoufack Pateson</em>
          <p>
            PremierDev is a non-profit organization that upskills Cameroon youth with web development skills via hackathons, bootcamps and community meet-ups. You can check out our website <a href="https://premierdev.org">here</a>.
          </p>
          <img src="/assets/pd_bcc1.png" width="300px" height="450px" alt="Summer Bootcamp"/>
          <img src="/assets/pd_bootcamp2.png" width="300px" height="450px" alt="Country Coordinator"/>
          <h2>2. Solutions to AlgoExpert Problem Sets</h2>
          <em>Author: me</em>
          <p>
            I love solving algorithmic problems so I spent time coming up with solutions to the practice problem sets on AlgoExpert. They are a good reference to anyone who wants to prepare for technical interviews or a hobbyist who wants to revise the fundamentals of algorithms and data structures.
          </p>
          <p>
            You can check them out on my GitHub at <a href="https://github.com/hoffmann-muki/algoexpert-solutions">algoexpert-solutions</a>
          </p>
          <h2>3. Kernels for Gaussian Process Factor Analysis</h2>
          <em>Author: me</em>
          <p>
            GPFA is a process for extracting smooth low-dimensional neural trajectories. It was introduced by Prof Yu et al in 2009 in the paper <a href="https://journals.physiology.org/doi/full/10.1152/jn.90941.2008">GPFA for Low-Dimensional Single-Trial Analysis of Neural Population Activity</a>.
            I extended the paper by introducing new kernels for GPA and evaluated how effective each kernel was in predicting the firing patterns of recorded neurons.
          </p>
          <p>
            You can check out my fork on GitHub at <a href="https://github.com/hoffmann-muki/undergraduate-final-year-project">undergraduate-final-year-project</a>.
          </p>
          <p>
            Some interesting graphs popped out of the experiments I ran with the kernels such as the ones below:
          </p>
          <img src="/assets/Movie1Exp1__d11.svg" alt="Movie 1 Graph"/>
          <img src="/assets/Movie1Exp2__d11__3D.svg" alt="Movie 1 3D Graph"/>
        </div>
      </>
    );
}
