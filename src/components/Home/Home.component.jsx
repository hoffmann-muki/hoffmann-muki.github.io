import React from "react";
import '../../styles/styles.css';
import { Header } from "../Shared/Header.component";
import { Sidebar } from "../Shared/Sidebar.component";

export const HomeComponent = () => {
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
      <div itemprop="headline" content="Welcome to Hoffmann’s website">
        <div itemprop="description" content="">
          <div class="page__inner-wrap">
            <header>
              <h1 class="page__title" itemprop="headline">Welcome to my website</h1>
            </header>
            <section class="page__content" itemprop="text">
              <p>I studied Software Engineering at the University of Edinburgh on a Mastercard Foundation Scholarship. I am a software engineer at BlackRock in the Portfolio Management division wherein I develop libraries for microservices. I enjoy programming across the computing stack: compilers, messaging systems, containers, back-end services, middleware, front-ends and machine learning.</p>
              <p>I'm interested in studying systems for machine learning, most especially methods involved in making the underlying frameworks more performant and scalable.</p>
              <p>You can find some of my hobby projects <a href="https://github.com/hoffmann-muki">here</a>.</p>
              <p>In addition to programming, I like reading books of all sorts: memoirs, startups, organizational management, philosophy and personal development.</p>
              <h2 id="contact-me">Contact Me</h2>
              <hr/>
              <p>I am glad to discuss ideas related to programming languages, compilers, virtual machines, functional programming and anything related to engineering and science. If you have any exciting ideas, please drop me an email.</p>
            </section>
          </div>
        </div>
      </div>
    </article>
  );
};
