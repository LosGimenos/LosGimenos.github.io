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
                <div id="img-simio" />
              </a>
            </li>
            <li>
              <div className="image_title">
                <a href='#'>add it up</a>
              </div>
              <a href="http://lida.org/add-it-up/" target="_blank">
                <img src="/images/add.jpg"/>
              </a>
            </li>
            <li>
              <div className="image_title">
                <a href='#'>mouse in a jar</a>
              </div>
              <a href="http://lida.org/mouse-in-a-jar/" target="_blank">
                <img src="../images/mouse.jpg"/>
              </a>
            </li>
            <li>
              <div className="image_title">
                <a href="#">rur/lol</a>
              </div>
              <a href="http://lida.org/r-u-r-lol/" target="_blank">
                <img src="../images/rur_lol.jpg"/>
              </a>
            </li>
            <li>
              <div className="image_title">
                <a href="#">rain/ of terror</a>
              </div>
              <a href="http://lida.org/rain-of-terror/" target="_blank">
                <img src="../images/rain_sunglasses.jpg"/>
              </a>
            </li>
            <li>
              <div className="image_title">
                <a href="http://lida.org/hot-wax-to-being-to-big-to-fail/" target="_blank">hot + wax</a>
              </div>
              <a href="#">
                <img src="../images/hot_wax.jpg"/>
              </a>
            </li>
             <li>
              <div className="image_title">
                <a href="#">ghostcard</a>
              </div>
              <a href="http://ghostcardshow.com/" target="_blank">
                <img src="../images/ghost_card.jpg"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
