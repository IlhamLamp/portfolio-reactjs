import React from 'react';
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {

    const today = new Date();
    const year = today.getFullYear();

    return (
        <div className="footer">
            <div className="socialMedia">
                <a href="https://www.instagram.com/hamnurrr/"><InstagramIcon /></a>
                <FacebookIcon />
                <a href="https://twitter.com/Hamnurrr_"><TwitterIcon /></a>
                <a href="https://www.linkedin.com/in/ilham-nur-utomo-064b89220/"><LinkedInIcon /></a>
            </div>
            <p> &copy; {year} - IlhamLamp </p>
        </div>
    );
}


export default Footer;