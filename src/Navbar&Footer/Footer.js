import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faLinkedin, faYoutube, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer>
        <div className="waves">
            <div className="wave" id="wave1"></div>
            <div className="wave" id="wave2"></div>
            <div className="wave" id="wave3"></div>
            <div className="wave" id="wave4"></div>
        </div>
            <ul className="footer-socials">
                <li><a target="_blank" href="https://www.facebook.com/" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                <li><a target="_blank" href="https://www.twitter.com/" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></li>
                <li><a target="_blank" href="https://www.linkedin.com/" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                <li><a target="_blank" href="https://www.youtube.com/" rel="noreferrer"><FontAwesomeIcon icon={faYoutube} /></a></li>
                <li><a target="_blank" href="https://www.github.com/" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
            </ul>
            <p>&copy;2021 <a target="_blank" rel="noreferrer" href="https://github.com/davidmvenegas">David Venegas</a> & <a target="_blank" rel="noreferrer" href="https://github.com/tanikaye">Tani Kaye</a> | All Rights Reserved</p>
        </footer>
    )
}


export default Footer
