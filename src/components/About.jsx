import { useState } from 'react';
import * as svgComponents from './svgComponents';

function About() {
  const [activeSpan, setActiveSpan] = useState(null);

  const handleReveal = (id) => {
    setActiveSpan(id === activeSpan ? null : id);
  };

  return (
    <div id="about" className="main-containers">
      <h1 className='vertical-header'>About Me</h1>

      <div id='skills-container'>
        <div><span>Skills Acquired</span></div>

        <div id="primary-skills" className='skills'>
          <svgComponents.Html5svg/> <svgComponents.Css3svg/> <svgComponents.Bootstrapsvg/>
          <svgComponents.Jssvg/> <svgComponents.Nodejssvg/> <svgComponents.Expressjssvg/>
        </div>

        <div id='primary-skills-pt2' className='skills'>
          <svgComponents.Mysqlsvg/> <svgComponents.Mongodbsvg/> <svgComponents.Reactsvg/>
          <svgComponents.Jquerysvg/> <svgComponents.Handlebarssvg/>
        </div>

        <div id="concept-skills" className='skills'>
          <svgComponents.Apisvg/> <svgComponents.Oopsvg/> <svgComponents.Sqlsvg/>
        </div>

        <div id="secondary-skills" className='skills'>

        </div>
      </div>

      <div id='topics-container'>
        <div>
          <span
            style={{color: activeSpan === 'topic-one' || activeSpan === null ? '' : 'gray'}}
            onClick={() => handleReveal('topic-one')}
          >
            Studying, Coding, Learning, Applying
          </span>
          {activeSpan === 'topic-one' &&
            <p className='content-animated'>
              TLDR: Highschool was when I learned HTML; I grew personal experience by coding personal
              projects; undertook a total of two bootcamps to acquire knowledge; studied video
              game-based coding concepts and business-based technology; acquired an Associates in GS,
              acquired college credits for a Bachelors in Cybersecurity; formally worked as a satellite
              tech aid; continuously learned more tools, html tricks, and methods to keep improving old
              and dated code-work; now looking to apply these skills in a career-based route.
            </p>
          }
        </div>

        <div>
          <span
            style={{color: activeSpan === 'topic-two' || activeSpan === null ? '' : 'gray'}}
            onClick={() => handleReveal('topic-two')}
          >
            Web Development Isn't Hard, Right?
          </span>
          {activeSpan === 'topic-two' &&
            <p className='content-animated'>
              For many, learning Web Development may sound "easy" or "not a challenging field", but
              that's because they only understand the tip of the iceberg of web development. There's a
              lot more to Web Development than just appearances. How was it structured? Is it easy to
              read when something on the page doesn't work? Does the page even function properly? How
              does it gather data? How does it process said data? Does it even secure the data being
              inserted, sent, and received? How much time was actually spent in building up the page?
              What makes it different than another web page? Thousands of questions to ask, but most
              go unanswered if the developer or dev team can't provide answers with full confidence.
            </p>
          }
        </div>

        <div>
          <span
            style={{color: activeSpan === 'topic-three' || activeSpan === null ? '' : 'gray'}}
            onClick={() => handleReveal('topic-three')}
          >
            My Development Story
          </span>
          {activeSpan === 'topic-three' &&
            <p id='third-p' className='content-animated'>
              I have a passion for web development ever since I was exposed to it in highschool - 
              Lakeview Technology Academy. Back then, I only understood HTML, CSS, and Java, but that
              was enough building blocks to appreciate how webpages were crafted, appeared, and
              interacted with users. I then got involved in 'forum code' (Proboards, JCINK, etc),
              which was more or less a distant cousin of HTML and CSS, but allowed me to explore and
              experiment with HTML and CSS in ways I couldn't in a classroom setting.
              <br/><br/>
              From there, I got involved in learning IT in general, to see what other coding language
              or field would stick to me. Dabbled in hardware knowledge, video game knowledge, various
              software knowledge, attended and passed a coding bootcamp through Gateway Technical
              College, dabbled in satellite knowledge, gained vast amounts of information on
              Cybersecurity through online courses provided by Columbia College of Missouri - even
              earning an Associates in General Studies and credits towards a Bachelors in Cybersecurity
              - and now recently attended and passed a newer coding bootcamp through Northwestern
              University + EdX.
              <br/><br/>
              Could I have done most of the coding knowledge on my own through online tutorials and
              videos? Probably, I know a handful who have done that. However, without the series of
              paths I've taken so far, albeit long and frustrating at times, I wouldn't have a
              different perspective that most probably don't realize when they're teaching themselves,
              or when most simply go towards a career based on a one-way education route. When you
              limit your options by going for the least difficult path, you're bound to be disappointed
              on the limited rewards at the end of said path. When you take different paths or forge
              new ones, and conquer the challenges for making those choices, your reward is more than
              just the end route. It's what you've gained along the way, and can now apply towards that
              goal you've set out in the first place.
              <br/><br/>
              Keep learning, keep exploring, keep improving, and keep coding.
            </p>
          }
        </div>
      </div>
    </div>
  )
}

export default About;