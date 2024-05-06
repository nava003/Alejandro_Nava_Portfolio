import { Githubiconsvg, Demoiconsvg } from "./svgComponents";

function Projects() {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <div id="projects" className="main-containers">
      <h1 className="vertical-header">Projects</h1>
      <div id="card-group">
        <div id="group-one" className="project-cards">
          <div className="card">
            <img src="/HobbyHouseIcon.jpeg" alt="Image of Hobby_House_Icon" />
            <h2>Hobby House</h2>
            <div className="project-links">
              <button title="Github Repo" onClick={() => openInNewTab('https://github.com/nava003/The_Hobby_House')}><Githubiconsvg/></button>
              <button title="Demo Link" onClick={() => openInNewTab('')}><Demoiconsvg/></button>
            </div>
            <span className="tooltip-text">
              A pseudo social media website for hobbyists to converse and share experiences
              on their favorite activities with like-minded or new hobbyist users.<br/><br/>
              From skateboarding to skiing, or origami to cooking, anything and everything
              is welcome to be discussed.<br/><br/>
              A full stack group project with a team of three (myself included) utilizing
              MongoDB, ExpressJS, ReactJS, and NodeJS (MERN) and FontAwesome icons.
            </span>
          </div>

          <div className="card">
            <img src="/BookSearchEngine.jpg" alt="Image of Book_Search_Engine" />
            <h2>Book Search</h2>
            <div className="project-links">
              <button title="Github Repo" onClick={() => openInNewTab('https://github.com/nava003/Book_Search_Engine')}><Githubiconsvg/></button>
              <button title="Demo Link" onClick={() => openInNewTab('')}><Demoiconsvg/></button>
            </div>
            <span className="tooltip-text">
              A website built to google search books based on series title or genre, and
              save their items during login.<br/><br/>
              Can also view their saved items on a separate page and delete items they
              no longer wish to keep.<br/><br/>
              A solo assignment built with MongoDB, ExpressJS, ReactJS, and NodeJS (MERN).
            </span>
          </div>

          <div className="card">
            <img src="/NoteTakerApp.jpg" alt="Image of Note_Taker_App" />
            <h2>Note Taker</h2>
            <div className="project-links">
              <button title="Github Repo" onClick={() => openInNewTab('https://github.com/nava003/Note_Taker')}><Githubiconsvg/></button>
              <button title="Demo Link" onClick={() => openInNewTab('')}><Demoiconsvg/></button>
            </div>
            <span className="tooltip-text">
              A note-taking web application capable of accepting user text and saving it
              on a list.<br/><br/>
              Can also view past saved notes and delete saved notes as needed.<br/><br/>
              A solo assignment built with Express.js back-end logic and read contents
              from a JSON file.
            </span>
          </div>
        </div>

        <div id="group-two" className="project-cards">
          <div className="card">
            <img src="/plant-leaf.svg" alt="SVG icon image of a plant." />
            <h2>Green Thumb Guide</h2>
            <div className="project-links">
              <button title="Github Repo" onClick={() => openInNewTab('https://github.com/SherryK1103/Green-Thumb-Guide')}><Githubiconsvg/></button>
              <button title="Demo Link" onClick={() => openInNewTab('')}><Demoiconsvg/></button>
            </div>
            <span className="tooltip-text">
              A conceptual informational website that informs the user on how to take care
              of their houseplants.<br/><br/>
              Users can log in, search for plants they own, or would like to own, save or
              favorite plants onto their account, and post blogs on their experiences.<br/><br/>
              A team project of three (including myself) built with Model, View, Controller
              (MVC) and Object-Relational Mapping (ORM).
            </span>
          </div>

          <div className="card">
            <img src="/WorkDayScheduler.jpg" alt="Image of a scheduler project" />
            <h2>Work Day Scheduler</h2>
            <div className="project-links">
              <button title="Github Repo" onClick={() => openInNewTab('https://github.com/nava003/Work_Day_Scheduler')}><Githubiconsvg/></button>
              <button title="Demo Link" onClick={() => openInNewTab('')}><Demoiconsvg/></button>
            </div>
            <span className="tooltip-text">
              A scheduler app to remind the user on the tasks they perform daily.<br/><br/>
              Working, going to the gym, or taking time to meditate, or even time for family
              activities - the scheduler can track what needs to be done hour by hour.<br/><br/>
              A solo assignment built with HTML, CSS, JS, and a third-party API.
            </span>
          </div>

          <div className="card">
            <img src="/ArtistLookup.jpg" alt="Image of an artist lookup project" />
            <h2>Artist Lookup</h2>
            <div className="project-links">
              <button title="Github Repo" onClick={() => openInNewTab('https://github.com/nava003/Artist_Lookup')}><Githubiconsvg/></button>
              <button title="Demo Link" onClick={() => openInNewTab('')}><Demoiconsvg/></button>
            </div>
            <span className="tooltip-text">
              A simple application displaying a wiki biography, albums, and a randomized GIF
              of an artist(s)/bands/groups in the music industry.<br/><br/>
              A team project of three (myself included) showcasing the first few weeks of
              understanding HTML, CSS, JS, and third-party + server-side APIs.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
