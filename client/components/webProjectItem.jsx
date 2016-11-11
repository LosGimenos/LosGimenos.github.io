import React from 'react';

const propTypes = {
  name: React.PropTypes.string,
  tech: React.PropTypes.string,
  description: React.PropTypes.string,
  url: React.PropTypes.string,
  imgSrc: React.PropTypes.string,
};

const WebProjectItem = ({ name, tech, description, url, imgSrc }) => {
  return (
    <div>
      <a href={url} target="_blank">
        <h3>{name}</h3>
        <img src={imgSrc} className="web-project-img" />
        <p>{description}</p>
        <p>TECH: {tech}</p>
      </a>
    </div>
  );
}

WebProjectItem.propTypes = propTypes;

export default WebProjectItem;
