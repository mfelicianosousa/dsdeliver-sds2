import React from "react";
import './styles.css' ;
import { ReactComponent as YouTubeIcon } from './youtube.svg';
import { ReactComponent as InstagramIcon } from './instagram.svg' ;
import { ReactComponent as LinkedinIcon } from './linkedin.svg' ;

function Footer(){
    return(
       <footer className="main-footer">

        App desenvolvido durante a 2a ed. do evento Semana DevSuperior
        <div className="footer-icons">
            <a href="https://www.youtube.com/c/DevSuperior" target="new"> <YouTubeIcon /> </a>
            <a href="https://www.linkedin.com/school/devsuperior"> <LinkedinIcon /> </a>
            <a href="https://www.instagram.com/devsuperior.ig/"> <InstagramIcon /> </a>

        </div>

       </footer>

    ) 
}

export default Footer ;