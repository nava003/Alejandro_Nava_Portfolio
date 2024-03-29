function Projects() {
  return (
    <div id="projects" className="main-containers">
      <h1>Projects Involved</h1>
      <div id="card-group1" className="project-cards">
        <div className="card">
          <a href="">
            <img src="/HobbyHouseIcon.jpeg" alt="Image of Hobby_House_Icon" />
          </a>
          <h2>Hobby House</h2>
          <p>Description</p>
        </div>
        <div className="card">
          <a href="">
            <img src="/BookSearchEngine.jpg" alt="Image of Book_Search_Engine" />
          </a>
          <h2>Book Search</h2>
          <p>Description</p>
        </div>
        <div className="card">
          <a href="">
            <img src="/NoteTakerApp.jpg" alt="Image of Note_Taker_App" />
          </a>
          <h2>Note Taker</h2>
          <p>Description</p>
        </div>
      </div>
      <div id="card-group2" className="project-cards">
        <div className="card">
          <a href="">
            <img src="/plant-leaf.svg" alt="SVG icon image of a plant." />
          </a>
          <h2>Green Thumb Guide</h2>
          <p>Description</p>
        </div>
        <div className="card">
          <a href="">
            <img src="/WorkDayScheduler.jpg" alt="Image of a scheduler project" />
          </a>
          <h2>Work Day Scheduler</h2>
          <p>Description</p>
        </div>
        <div className="card">
          <a href="">
            <img src="/ArtistLookup.jpg" alt="Image of an artist lookup project" />
          </a>
          <h2>Artist Lookup</h2>
          <p>Description</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
