import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faLine,
} from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  return (
    <section className="page-section cta">
      <div className="container">
        <div className="row justify-content-md-center">
          <a
            href="https://www.facebook.com/101399111690101/"
            target="_blank"
            rel="noreferrer"
            title="Facebook"
            className="col-md-auto link"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
            Facebook
          </a>
          <a
            href="https://www.instagram.com/morning_star_coffee/"
            target="_blank"
            rel="noreferrer"
            title="Instagram"
            className="col-md-auto link"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            Instagram
          </a>
          <a
            href="https://www.instagram.com/morning_star_coffee/"
            target="_blank"
            rel="noreferrer"
            title="Line"
            className="col-md-auto link"
          >
            <FontAwesomeIcon icon={faLine} size="2x" />
            Line
          </a>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <div className="cta-inner text-center rounded">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.7116295583137!2d121.51678199999999!3d25.0099129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9a162b8dad1%3A0xf996725a41c752bd!2z5pmo5pif5ZKW5ZWh6aSoTW9ybmluZyBTdGFyIENvZmZlZQ!5e0!3m2!1szh-TW!2stw!4v1601801131522!5m2!1szh-TW!2stw"
                width="100%"
                height="100%"
                frameborder="0"
                allowfullscreen=""
                aria-hidden="false"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
