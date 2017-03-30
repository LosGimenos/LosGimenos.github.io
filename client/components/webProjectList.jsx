import React, { Component } from 'react';
import WebProjectItem from './webProjectItem.jsx';

export default class WebProjectList extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          name: 'Dump the Chump',
          description: 'Users click on body parts and tap keys to provide the parts with ultra-fresh dance moves.',
          tech: 'JavaScript, CSS, HTML',
          url: `https://losgimenos.github.io/dumpthechump/`,
          imgSrc: `https://github.com/LosGimenos/dumpthechump/blob/gh-pages/img/screens/Screen%20Shot%202016-09-05%20at%209.26.39%20PM.png?raw=true`,
        },
        {
          name: 'PaFuera',
          description: 'NYC events blog aggregator.',
          tech: 'React, Postgresql, Node, Cheerio, CSS',
          url: `https://pafuera.herokuapp.com/`,
          imgSrc: `https://github.com/LosGimenos/LosGimenos.github.io/blob/master/images/Screen%20Shot%202016-12-20%20at%201.56.31%20PM.png?raw=true`,
        },
        {
          name: 'Tell Me Where to Go',
          description: 'A restaurant-roulette game designed to help find a restaurant.',
          tech: 'React, Postgresql, Node, CSS',
          url: `https://tell-me-where-to-go.herokuapp.com/`,
          imgSrc: `https://github.com/LosGimenos/LosGimenos.github.io/blob/master/images/Screen%20Shot%202016-10-18%20at%209.58.26%20PM.png?raw=true`,
        },
        {
          name: 'Flea',
          description: 'Single-page listing app built with React.',
          tech: 'React, Node, Firebase, Webpack, Babel, and CSS',
          url: `https://losgimenos.github.io/Flea/`,
          imgSrc: `https://github.com/LosGimenos/Flea/raw/master/img/Screen%20Shot%202016-09-26%20at%209.22.36%20PM.png?raw=true`,
        },
        // {
        //   name: 'Realtor Shannon',
        //   description: 'Personal site for NYC based realtor',
        //   tech: 'JQuery, CSS',
        //   url: 'http://realtorshannon.nyc',
        //   imgSrc: `https://github.com/LosGimenos/LosGimenos.github.io/blob/master/images/Screen%20Shot%202016-11-21%20at%201.03.59%20PM.png?raw=true`,
        // },
      ],
    };
  }
  render() {
    const webProjects = this.state.projects.map((project) => {
      return (
        <div className="web-project-item">
          <WebProjectItem
            name={project.name}
            description={project.description}
            tech={project.tech}
            url={project.url}
            imgSrc={project.imgSrc}
          />
        </div>
      );
    })
    return (
      <div id="web-project-list-wrapper">
        <div id="web-project-list">
          {webProjects}
        </div>
      </div>
    );
  }
}
