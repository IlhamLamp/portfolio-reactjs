import React from "react";
import TelegramIcon from "@material-ui/icons/Telegram";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
    return (
        <div className="home">
            <div className="about">
                <h2> Hi, My Name is Ilham </h2>
                <div className="prompt">
                    <p>a student who likes new things.</p>
                    <a href="https://t.me/hamnurr"><TelegramIcon /></a>
                    <EmailIcon />
                    <a href="https://github.com/IlhamLamp"><GithubIcon /></a>
                </div>
            </div>
            <div className="quote">
                <blockquote className="sidekick">
                    Ipsa scientia potestas est. Knowledge itself is power.
                    <cite> Francis Bacon</cite>
                </blockquote>
            </div>
        </div >
    );
}

export default Home;