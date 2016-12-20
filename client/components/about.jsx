import React, { Component } from 'react';

const About = () => {
    return (
      <div id="about">
        <div className="about-top">
          <div className="about-top-h1">
            <h1>
              Creator<br />
              Collaborator<br />
              Devisor
            </h1>
          </div>
          <div className="about-top-right-h1 clearfix">
            <h1>
              Find me here.
            </h1>
          </div>
        </div>
            <hr />
        <div className="about-bottom">
          <div className="about-bottom-cred">
            <p>
              I build stories and I tell stories. <br />
              Full Stack web developer using <br />
              CSS, JS, Node, React, Rails, PostgreSQL. <br />
              Dabbles in Python, Pandas, PHP, D3. <br />
              Other software proficiences include: <br />
              Final Cut Pro, Protools, Photoshop, Illustrator,
              Isadora, QLab and Publisher.
            </p>
            <p>
              Specializes in devised work and creating immersive
              theatrical worlds.
              Experienced with lighting design,
              sound design, and scoring. <br /> <br />
              Takes some pictures from time to time.
            </p>
          </div>
          <div className="about-bottom-info">
            <p>email:<br />
              <a href="mailto:enzosarin@gmail.com">
                enzosarin at gmail.com
              </a>
            </p>
            <p>github:<br />
              <a href="https://github.com/LosGimenos/" target="_blank">
                @LosGimenos
              </a>
            </p>
            <p>linkedin:<br />
              <a href="https://www.linkedin.com/in/lorenzosarinana/" target="_blank">
                <span className="shrink">@lorenzosarinana</span>
              </a>
            </p>
            <p>instagram:<br />
              <a href="https://www.instagram.com/spasticyomi/" target="_blank">
                @spasticyomi
              </a>
            </p>
            <p>flickr:<br />
              <a href="https://www.flickr.com/photos/lorenzosarinana/" target="_blank">
                @deRetraido
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }

  export default About;
