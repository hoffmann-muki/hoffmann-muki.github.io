import '../../styles/styles.css';

const homePageLink = "https://hoffmann-muki.github.io/";
// const homePageLink = "http://localhost:3000";
const projectsPageLink = "https://hoffmann-muki.github.io/#/projects/";
// const projectsPageLink = "http://localhost:3000/#/projects/";
const booksPageLink = "https://hoffmann-muki.github.io/#/books";
// const booksPageLink = "http://localhost:3000/#/books/";
const cvPageLink = "https://hoffmann-muki.github.io/#/cv/";
// const cvPageLink = "http://localhost:3000/#/cv/";

export const Header = () => {
  return (
    <div className="masthead">
      <div className="masthead__inner-wrap">
          <div className="masthead__menu">
            <nav id="site-nav" className="greedy-nav">
              <ul className="visible-links">
                <li className="masthead__menu-item masthead__menu-item--lg"><a href={homePageLink}><b>About Me</b></a></li>
                <li className="masthead__menu-item"><a href={projectsPageLink}>Projects</a></li>
                <li className="masthead__menu-item"><a href={booksPageLink}>Books</a></li>
                <li className="masthead__menu-item"><a href={cvPageLink}>CV</a></li>
              </ul>
            </nav>
          </div>
      </div>
    </div>
  );
}
