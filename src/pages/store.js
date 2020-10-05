import React from 'react';

import Layout from '../components/Layout';
import Contact from '../components/Contact';

const IndexPage = () => (
  <Layout activeLink="store">
    <section className="page-section cta">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <div className="cta-inner text-center rounded content">
              <h2 className="section-heading mb-5">
                <span className="section-heading-upper">Come On In</span>
                <span className="section-heading-lower">We're Open</span>
              </h2>
              <ul className="list-unstyled list-hours mb-5 text-left mx-auto">
                <li className="list-unstyled-item list-hours-item d-flex">
                  星期一～星期五
                  <span className="ml-auto">09:00–19:00</span>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  星期六
                  <span className="ml-auto">09:00–19:00</span>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  星期日
                  <span className="ml-auto">09:00–19:00</span>
                </li>
              </ul>
              <p className="address mb-5">
                <strong>234新北市永和區豫溪街39號</strong>
              </p>
              <p className="mb-0">
                <small>
                  <em>營業時間可撥打電話</em>
                </small>
                <br />
                <a href="tel:+886970663330">0970-663-330</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Contact />
  </Layout>
);

export default IndexPage;
