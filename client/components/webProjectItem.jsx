import React from 'react';

const proptypes = {
  name: React.PropTypes.string,
  tech: React.PropTypes.string,
  description: React.PropTypes.string,
  url: React.PropTypes.string,
  imgSrc: React.PropTypes.string,
};

const WebProjectItem = ({ name, tech, description, url, imgSrc }) => {
  return (
    <div>
      <a href={url}>
        <h3>{name}</h3>
        <img src={imgSrc} className="web-project-img" />
        <hr />
        <p>{description}</p>
      </a>
    </div>
  );
}

WebProjectItem.propTypes = propTypes;

export default WebProjectItem;
