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
    { id: 1, title: "The lean startup", imageUrl: "/assets/lean startup.png"},
    { id: 2, title: "Free", imageUrl: "/assets/free.png" },
    { id: 3, title: "Castles in the Air", imageUrl: "/assets/castles.png" },
    { id: 4, title: "Think Again", imageUrl: "/assets/think again.png" },
    { id: 5, title: "The Aristocracy of Talent", imageUrl: "/assets/aristocracy.png" },
    { id: 6, title: "The Trading Game", imageUrl: "/assets/trading game.png" },
    { id: 7, title: "No filter", imageUrl: "/assets/no filter.png"},
    { id: 8, title: "Start-Up Nation", imageUrl: "/assets/startup nation.png"},
    { id: 9, title: "How dare the sun rise", imageUrl: "/assets/how dare the sun rise.png"},
    { id: 10, title: "Deep Work", imageUrl: "/assets/deep work.png"},
    { id: 11, title: "Grit", imageUrl: "/assets/grit.png"},
    { id: 12, title: "Zero to One", imageUrl: "/assets/zero to one.png"},
    { id: 13, title: "The Changing World Order", imageUrl: "/assets/changing world order.png"},
    { id: 14, title: "Atomic Habits", imageUrl: "/assets/atomic habits.png"},
    { id: 15, title: "The Science of Storytelling", imageUrl: "/assets/stories.png"},
    { id: 16, title: "Educated", imageUrl: "/assets/educated.png"},
    { id: 17, title: "Genuine Intellectuals", imageUrl: "/assets/genuine intellectual.png"},
    { id: 18, title: "So good that they can't ignore you", imageUrl: "/assets/so good.png"},
    { id: 19, title: "Designing data-intensive applications", imageUrl: "/assets/ddia.png"},
    { id: 20, title: "Clean Architecture", imageUrl: "/assets/clean architecture.png"},
    { id: 21, title: "Crafting Interpreters", imageUrl: "/assets/interpreters.png"},
    { id: 22, title: "Ego is the Enemy", imageUrl: "/assets/ego.png"},
    { id: 23, title: "The obstacle is the way", imageUrl: "/assets/obstacles.png"},
    { id: 24, title: "Hidden potential", imageUrl: "/assets/potential.png"},
    { id: 25, title: "Soaring above life's turbulence", imageUrl: "/assets/soaring.png" },     
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
