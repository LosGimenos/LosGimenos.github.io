import React, { Component } from 'react';

export default class Theatrical extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <div id="theatrical-title">
          <h3>Direction.Performance.Design</h3>
        </div>
        <div className="accordian">
          <ul>
            <li>
              <div className="image_title">
                <a href="#">el simio</a>
              </div>
              <a href="http://lida.org/the-hairy-ape/" target="_blank">
                <img src="https://github.com/LosGimenos/LosGimenos.github.io/blob/master/images/el_simio.jpg?raw=true"/>
              </a>
            </li>
            <li>
              <div className="image_title">
                <a href='#'>add it up</a>
              </div>
              <a href="http://lida.org/add-it-up/" target="_blank">
                <img src="https://github.com/LosGimenos/LosGimenos.github.io/blob/master/images/add.jpg?raw=true"/>
              </a>
            </li>
            <li>
              <div className="image_title">
                <a href='#'>mouse in a jar</a>
              </div>
              <a href="http://lida.org/mouse-in-a-jar/" target="_blank">
                <img src="https://github.com/LosGimenos/LosGimenos.github.io/blob/master/images/mouse.jpg?raw=true"/>
              </a>
            </li>
            <li>
              <div className="image_title">
                <a href="#">rur/lol</a>
              </div>
              <a href="http://lida.org/r-u-r-lol/" target="_blank">
                <img src="https://github.com/LosGimenos/LosGimenos.github.io/blob/master/images/rur_lol.jpg?raw=true"/>
              </a>
            </li>
            <li>
              <div className="image_title">
                <a href="#">rain/ of terror</a>
              </div>
              <a href="http://lida.org/rain-of-terror/" target="_blank">
                <img src="https://github.com/LosGimenos/LosGimenos.github.io/blob/master/images/rain_sunglasses.jpg?raw=true"/>
              </a>
            </li>
            <li>
              <div className="image_title">
                <a href="http://lida.org/hot-wax-to-being-to-big-to-fail/" target="_blank">hot + wax</a>
              </div>
              <a href="#">
                <img src="https://github.com/LosGimenos/LosGimenos.github.io/blob/master/images/hot_wax.jpg?raw=true"/>
              </a>
            </li>
             <li>
              <div className="image_title">
                <a href="#">ghostcard</a>
              </div>
              <a href="http://ghostcardshow.com/" target="_blank">
                <img src="https://github.com/LosGimenos/LosGimenos.github.io/blob/master/images/ghost_card.jpg?raw=true"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
