import { Githubiconsvg, Demoiconsvg } from "./svgComponents";

function Projects() {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <div id="projects" className="main-containers">
      <h1 className="vertical-header">Projects Involved</h1>
      <div id="card-group">
        <div id="group-one" className="project-cards">
          <div className="card">
            <img src="/HobbyHouseIcon.jpeg" alt="Image of Hobby_House_Icon" />
            <h2>Hobby House</h2>
            <div className="project-links">
              <button title="Github Repo" onClick={() => openInNewTab('https://github.com/nava003/The_Hobby_House')}><Githubiconsvg/></button>
              <button title="Demo Link" onClick={() => openInNewTab('')}><Demoiconsvg/></button>
            </div>
          </div>

          <div className="card">
            <img src="/BookSearchEngine.jpg" alt="Image of Book_Search_Engine" />
            <h2>Book Search</h2>
            <div className="project-links">
              <button title="Github Repo" onClick={() => openInNewTab('https://github.com/nava003/Book_Search_Engine')}><Githubiconsvg/></button>
              <button title="Demo Link" onClick={() => openInNewTab('')}><Demoiconsvg/></button>
            </div>
          </div>

          <div className="card">
            <img src="/NoteTakerApp.jpg" alt="Image of Note_Taker_App" />
            <h2>Note Taker</h2>
            <div className="project-links">
              <button title="Github Repo" onClick={() => openInNewTab('https://github.com/nava003/Note_Taker')}><Githubiconsvg/></button>
              <button title="Demo Link" onClick={() => openInNewTab('')}><Demoiconsvg/></button>
            </div>
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
          </div>

          <div className="card">
            <img src="/WorkDayScheduler.jpg" alt="Image of a scheduler project" />
            <h2>Work Day Scheduler</h2>
            <div className="project-links">
              <button title="Github Repo" onClick={() => openInNewTab('https://github.com/nava003/Work_Day_Scheduler')}><Githubiconsvg/></button>
              <button title="Demo Link" onClick={() => openInNewTab('')}><Demoiconsvg/></button>
            </div>
          </div>

          <div className="card">
            <img src="/ArtistLookup.jpg" alt="Image of an artist lookup project" />
            <h2>Artist Lookup</h2>
            <div className="project-links">
              <button title="Github Repo" onClick={() => openInNewTab('https://github.com/nava003/Artist_Lookup')}><Githubiconsvg/></button>
              <button title="Demo Link" onClick={() => openInNewTab('')}><Demoiconsvg/></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
