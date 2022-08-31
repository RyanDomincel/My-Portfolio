import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";
import Particle from "../components/Particle";

function Home() {
  return (
    <div className="home">
      <div className="about" id="my-name">
        <Particle />
        <h2>Hi! I'm Ryan</h2>

        <div className="prompt" id="prompt">
          <p>I design and code simple things, and I love what I do.</p>
          <a
            href="https://github.com/RyanDomincel"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/ryan-domincel-719385145/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
      <hr />
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              HTML, CSS, ReactJS, Redux, NPM, Bootstrap, MaterialUI, Tailwind
              CSS, Styled Components
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, MySQL, MongoDB,</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, PHP, VB.Net</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
