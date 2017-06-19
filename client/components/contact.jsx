import React from 'react';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__title">
        <h1>
          find me here
        </h1>
      </div>
      <hr />
      <p>email:<br />
        <a href="mailto:larryhernanjr@gmail.com">
          larryhernanjr at gmail.com
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
  );
}

export default Contact;
