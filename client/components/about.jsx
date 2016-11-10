import React, { Component } from 'react';

export default class About extends Component {
  render() {
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
              I build stories and I tell stories.
              Specializes in devised work and creating immersive
              theatrical worlds.
              Experienced with lighting design,
              sound design, and scoring.
            </p>
            <p>
              Full Stack web developer proficient with
              HTML, CSS, JS, Node, React and RUBY.
              Other software proficiences include:
              Final Cut Pro, Protools, Photoshop, Illustrator,
              Isadora, QLab and Publisher.
            </p>
          </div>
          <div className="about-bottom-info">
            <p>email:<br />
              <a href="mailto:enzosarin@gmail.com">
                enzosarin at gmail.com
              </a>
            </p>
            <p>github:<br />
              <a href="https://github.com/LosGimenos" target="_blank">
                @LosGimenos
              </a>
            </p>
            <p>linkedin:<br />
              <a href="https://www.linkedin.com/in/lorenzosarinana" target="_blank">
                <span className="shrink">@lorenzosarinana</span>
              </a>
            </p>
            <p>instagram:<br />
              <a href="https://www.instagram.com/spasticyomi/" target="_blank">
                @spasticyomi
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
