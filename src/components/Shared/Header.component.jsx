import '../../styles/styles.css';

let isLocal = false;

const GithubDomain = "https://hoffmann-muki.github.io/";
const localhostDomain = "http://localhost:3000";

const homePageLink = isLocal ? localhostDomain : GithubDomain;
const projectsPageLink = isLocal ? localhostDomain + "#/projects/" : GithubDomain + "#/projects/";
const booksPageLink = isLocal ? localhostDomain + "#/books/" : GithubDomain + "#/books/";
const cvPageLink = isLocal ? localhostDomain + "#/cv/" : GithubDomain + "#/cv/";

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
