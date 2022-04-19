import React from 'react';
import './Footer.scss';
const Footer = () => {
  return (
    <div className="app__footer">
      <div className="app__footer-copyright-text">
        <p className="p-text">
          Copyright © 2022 All Rights Reserved by{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://towfik.netlify.app/"
          >
            Towfik Hasan
          </a>
        </p>
      </div>
      <div className="app__footer-socials-icons">
        <a href="mailto:tufikhasan05@gmail.com">
          <span className="fa fa-google"></span>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/channel/UC1ciHNGCtBJxmpScCyB0qAw"
        >
          <span className="fa fa-youtube"></span>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/tufik_hasan"
        >
          <span className="fa fa-twitter"></span>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="http://linkedin.com/in/tufikhasan"
        >
          <span className="fa fa-linkedin"></span>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/ami.toufiq/"
        >
          <span className="fa fa-facebook"></span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
