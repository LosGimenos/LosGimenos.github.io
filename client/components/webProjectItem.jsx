import React from 'react';

const propTypes = {
  name: React.PropTypes.string,
  tech: React.PropTypes.string,
  description: React.PropTypes.string,
  url: React.PropTypes.string,
  imgSrc: React.PropTypes.string,
};


const WebProjectItem = ({ name, tech, description, url, imgSrc }) => {
  const divStyle = {
    background: `url('${imgSrc}')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div className="web-project-item-base">
      <div className="web-project-item-details">
          <a href={url} target="_blank">
          <h3 className="web-project-title">{name}</h3>
          <p>{description}</p>
          <p>TECH: {tech}</p>
          </a>
      </div>
      <div className="web-project-item__img" style={divStyle}>
      </div>
    </div>
  );
}

WebProjectItem.propTypes = propTypes;

export default WebProjectItem;
