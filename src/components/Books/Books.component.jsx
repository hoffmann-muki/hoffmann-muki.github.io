import React from "react"
import '../../styles/styles.css';
import './books.styles.css';
import { Header } from "../Shared/Header.component";
import { Sidebar } from "../Shared/Sidebar.component";

export const BooksComponent = () => { 
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
            <div itemprop="headline" content="Books">
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

const books = [
    { id: 1, title: "Soaring above life's turbulence", imageUrl: "/assets/soaring.png" },
    { id: 2, title: "Free: Coming of Age at the End of History", imageUrl: "/assets/free.png" },
    { id: 3, title: "Castles in the Air: Logic, Mathematics and the Human Mind", imageUrl: "/assets/castles.png" },
    { id: 4, title: "Think Again", imageUrl: "/assets/think again.png" },
    { id: 5, title: "The Aristocracy of Talent", imageUrl: "/assets/aristocracy.png" },
    { id: 6, title: "The Trading Game", imageUrl: "/assets/trading game.png" },
    { id: 7, title: "No filter: The inside story of Instagram", imageUrl: "/assets/no filter.png"},
    { id: 8, title: "Start-Up Nation: The story of Israel's Economic Miracle", imageUrl: "/assets/startup nation.png"},
    { id: 9, title: "How dare the sun rise: Memoirs of a war child", imageUrl: "/assets/how dare the sun rise.png"},
    { id: 9, title: "Deep Work", imageUrl: "/assets/deep work.png"},
    { id: 9, title: "Grit", imageUrl: "/assets/grit.png"},
    { id: 9, title: "Zero to One", imageUrl: "/assets/zero to one.png"},
  ];

const List = () => {
    return (
        <div className="book-list">
            {books.map((book) => (
            <div key={book.id} className="book-item">
                <img src={book.imageUrl} alt={book.title} className="book-image" />
                <p>{book.title}</p>
            </div>
            ))}
        </div>
    );
}
