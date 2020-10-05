import React from 'react';

import Layout from '../components/Layout';
import Contact from '../components/Contact';

import menu1 from '../assets/images/menu-left.jpg';
import menu2 from '../assets/images/menu-right.jpg';

const IndexPage = () => (
  <Layout activeLink="store">
    <section className="page-section cta">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto contentWrapper">
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
    <section className="page-section about-heading">
      <div className="container">
        <div className="row mb-4">
          <div className="col-xl-4 col-lg-6 mx-auto">
            <div className="bg-faded rounded p-5">
              <h2 className="section-heading text-center">
                <span className="section-heading-lower">MENU</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <img className="col-xl-6" src={menu1} alt="menu" />
          <img className="col-xl-6" src={menu2} alt="menu" />
        </div>
      </div>
    </section>
    <Contact />
  </Layout>
);

export default IndexPage;
