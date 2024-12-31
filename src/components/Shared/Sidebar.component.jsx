import '../../styles/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

export const Sidebar = () => {
  return (
    <div class="sidebar">
        <div style={{ paddingLeft: 8 }}>
          <div class="author__avatar"> 
            <img src="/images/AmexPic.jpg" class="author__avatar" alt="Hoffmann Muki"/>
          </div>
          <div class="author__content">
            <h3 class="author__name">Hoffmann Muki</h3>
            <p class="author__bio">Software Engineer @ BlackRock</p>
          </div>
          <div class="author__urls-wrapper"> 
            <button class="btn btn--inverse">Follow</button>
            <ul class="author__urls social-icons">
              <li><FontAwesomeIcon icon={faLocationDot}/> London, England</li>
              <li><a href="mailto:hoffmuki@gmail.com"><FontAwesomeIcon icon={faEnvelope} /> Email</a></li>
              <li><a href="https://www.linkedin.com/in/hoffmann-muki/"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a></li>
              <li><a href="https://www.instagram.com/hoffmann_muki/"><FontAwesomeIcon icon={faInstagram} /> Instagram</a></li>
              <li><a href="https://github.com/hoffmann-muki"><FontAwesomeIcon icon={faGithub} /> Github</a></li>
            </ul>
          </div>
        </div>
    </div>
  );
};
