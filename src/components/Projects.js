import React from "react";

const Projects = () => {
  return (
    <div className="projects">
      <div className="note">
        <p>
          <b>Note</b> : Some of the projects are not live due to free APIs
          working only on localhost. To view the code, check out my
          GitHub—link's on the Contact page!
        </p>
      </div>
      <div className="p1">
        <div className="p1description">
          <h3>iNotebook – Notes App (React + Auth)</h3>
          <p> &#x2022; Full-stack notes app with login/signup using JWT</p>
          <p>&#x2022; Users can add, update, delete personal notes</p>
          <p>&#x2022; Mobile-friendly design</p>
          <div className="preview">
            <a
              href="https://github.com/HammadGH123/iNoteBook-frontend"
              rel="noreferrer"
              target="_blank"
            >
              Click to get code
            </a>
          </div>
        </div>
        <div className="p1imaage"></div>
      </div>
      <div className="p2">
        <div className="p2description">
          <h3>NewsDose – News Web App</h3>
          <p> &#x2022; React app fetching live news using NewsAPI</p>
          <p>&#x2022; Category filtering and pagination</p>
          <p>&#x2022; Clean, responsive layout</p>
          <div className="preview">
            <a
              href="https://github.com/HammadGH123/newdose"
              rel="noreferrer"
              target="_blank"
            >
              Click to get code
            </a>
          </div>
        </div>
        <div className="p2imaage"></div>
      </div>
      <div className="p3">
        <div className="p3description">
          <h3>Weather App</h3>
          <p> &#x2022; React app using OpenWeatherMap API</p>
          <p>&#x2022; Shows city-wise weather with live data</p>
          <p>&#x2022; Fully responsive design</p>
          <div className="preview">
            <a
              href="https://github.com/HammadGH123/weather_explorer"
              rel="noreferrer"
              target="_blank"
            >
              Click to get code
            </a>
          </div>
        </div>
        <div className="p3imaage"></div>
      </div>
      {/* <div className="p3">
        <div className="p3description">
          <h3>Weather App</h3>
          <p> &#x2022; React app using OpenWeatherMap API</p>
          <p>&#x2022; Shows city-wise weather with live data</p>
          <p>&#x2022; Fully responsive design</p>
          <div className="preview">
            <a
              href="https://github.com/HammadGH123/weather_explorer"
              rel="noreferrer"
              target="_blank"
            >
              Click to get code
            </a>
          </div>
        </div>
        <div className="p3imaage"></div>
      </div>
      <div className="p3">
        <div className="p3description">
          <h3>Weather App</h3>
          <p> &#x2022; React app using OpenWeatherMap API</p>
          <p>&#x2022; Shows city-wise weather with live data</p>
          <p>&#x2022; Fully responsive design</p>
          <div className="preview">
            <a
              href="https://github.com/HammadGH123/weather_explorer"
              rel="noreferrer"
              target="_blank"
            >
              Click to get code
            </a>
          </div>
        </div>
        <div className="p3imaage"></div>
      </div>
      <div className="p3">
        <div className="p3description">
          <h3>Weather App</h3>
          <p> &#x2022; React app using OpenWeatherMap API</p>
          <p>&#x2022; Shows city-wise weather with live data</p>
          <p>&#x2022; Fully responsive design</p>
          <div className="preview">
            <a
              href="https://github.com/HammadGH123/weather_explorer"
              rel="noreferrer"
              target="_blank"
            >
              Click to get code
            </a>
          </div>
        </div>
        <div className="p3imaage"></div>
      </div> */}
    </div>
  );
};

export default Projects;
