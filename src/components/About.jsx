import { useState } from 'react';
import {
  Html5svg, Css3svg, Jssvg, Apisvg, Nodejssvg,
  Oopsvg, Expressjssvg, Mysqlsvg, Mongodbsvg, Reactsvg,
  Bootstrapsvg, Jquerysvg, Handlebarssvg, Sqlsvg
} from './svgComponents';

function About() {
  const [activeDiv, setActiveDiv] = useState(null);
  const div1 = 'div1';
  const div2 = 'div2';
  const div3 = 'div3';

  const handleReveal = (divRef) => {
    setActiveDiv(prevActiveDiv => (prevActiveDiv === divRef ? null : divRef));
  };

  return (
    <div id="about" className="main-containers">
      <div id='skills-container'>
        <h2 className='about-headers'>Skills Acquired</h2>
        <p id="primary-skills" className='skills'>
          <Html5svg/> <Css3svg/> <Bootstrapsvg/> <Jssvg/> <Nodejssvg/> <Expressjssvg/>
        </p>
        <p id='primary-skills-pt2' className='skills'>
          <Mysqlsvg/> <Mongodbsvg/> <Reactsvg/> <Jquerysvg/> <Handlebarssvg/>
        </p>
        <p id="concept-skills" className='skills'>
          <Apisvg/> <Oopsvg/> <Sqlsvg/>
        </p>
        <p id="secondary-skills" className='skills'>

        </p>
      </div>

      <div id='topics-container'>
        <h2 className='about-headers' onClick={() => handleReveal(div1)}>Studying, Coding, Learning, Applying</h2>
        {activeDiv === div1 &&
          <p className='content-animated'>
            TLDR: Highschool was when I learned HTML; I grew personal experience by coding personal
            projects; undertook a total of two bootcamps to acquire knowledge; studied video
            game-based coding concepts and business-based technology; acquired an Associates in GS,
            acquired college credits for a Bachelors in Cybersecurity; formally worked as a satellite
            tech aid; continuously learned more tools, html tricks, and methods to keep improving old
            and dated code-work; now looking to apply these skills in a career-based route.
          </p>
        }
      
        <h2 className='about-headers' onClick={() => handleReveal(div2)}>Web Development Isn't Hard, Right?</h2>
        {activeDiv === div2 &&
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
        
        <h2 className='about-headers' onClick={() => handleReveal(div3)}>My Development Story</h2>
        {activeDiv === div3 &&
          <p className='content-animated'>
            I have a passion for web development ever since I was exposed to it in highschool - 
            Lakeview Technology Academy. Back then, I only understood HTML, CSS, and Java, but that
            was enough building blocks to appreciate how webpages were crafted, appeared, and
            interacted with users. I then got involved in 'forum code' (Proboards, JCINK, etc),
            which was more or less a distant cousin of HTML and CSS, but allowed me to explore and
            experiment with HTML and CSS in ways I couldn't in a classroom setting.
            <br/><br/>
            From there, I got involved in learning IT in general, to see what other coding language
            or field would stick to me. Dabbled in hardware knowledge, video game knowledge,
            various software knowledge, attended and passed a coding bootcamp through Gateway
            Technical College, dabbled in satellite knowledge, gained vast amounts of information
            on Cybersecurity through online courses provided by Columbia College of Missouri - even
            earning an Associates in General Studies and credits towards a Bachelors in
            Cybersecurity - and now recently attended and passed a newer coding bootcamp through
            Northwestern University + EdX.
            <br/><br/>
            Could I have done most of the coding knowledge on my own through online tutorials
            and videos? Probably, I know a handful who have done that. However, without the
            series of paths I've taken so far, albeit long and frustrating at times, I wouldn't
            have a different perspective that most probably don't realize when they're teaching
            themselves, or when most simply go towards a career based on a one-way education route.
            When you limit your options by going for the least difficult path, you're bound to be
            disappointed on the limited rewards at the end of said path. When you take different
            paths or forge new ones, and conquer the challenges for making those choices, your
            reward is more than just the end route. It's what you've gained along the way, and can
            now apply towards that goal you've set out in the first place.
            <br/><br/>
            Keep learning, keep exploring, keep improving, and keep coding.
          </p>
        }
      </div>
    </div>
  )
}

export default About;