import React from 'react';

import Layout from '../components/Layout';

import { Link } from 'gatsby';
import Header from '../components/Header';
import Footer from '../components/Footer';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';

import Project from '../components/Project'

const IndexPage = () => (
  <Layout>
    <Header />
    <div id="main">
      <header className="major container medium">
        <h2>
          專案成果
        </h2>
      </header>
      <Project />
     {/*  <div className="box alt container">
        <section className="feature left">
          <iframe className="image" allowfullscreen allow="fullscreen" src="//e.issuu.com/embed.html?d=20191018-3&pageLayout=singlePage&u=pdis.tw"></iframe>
          <div className="content">
            <h3>個人健保資料網路服務作業</h3>
            <p>
              <a href="https://eservice.nhi.gov.tw/Personal1/System/mLogin.aspx" target="_blank">現行網站</a>
              <br/>
              <a href="https://eservice.nhi.gov.tw/Personal1/System/mLogin.aspx" target="_blank">Prototype</a>
            </p>
          </div>
        </section>
        <section className="feature right">
          <a href="/#" className="image icon fa-code">
            <img src={pic2} alt="" />
          </a>
          <div className="content">
            <h3>The Second Thing</h3>
            <p>
              Vitae natoque dictum etiam semper magnis enim feugiat amet
              curabitur tempor orci penatibus. Tellus erat mauris ipsum
              fermentum etiam vivamus eget. Nunc nibh morbi quis fusce lacus.
            </p>
          </div>
        </section>
        <section className="feature left">
          <a href="/#" className="image icon fa-mobile">
            <img src={pic3} alt="" />
          </a>
          <div className="content">
            <h3>The Third Thing</h3>
            <p>
              Vitae natoque dictum etiam semper magnis enim feugiat amet
              curabitur tempor orci penatibus. Tellus erat mauris ipsum
              fermentum etiam vivamus eget. Nunc nibh morbi quis fusce lacus.
            </p>
          </div>
        </section>
      </div> */}

      <footer className="major container medium">
        <h3>Get shady with this starter</h3>
        <p>
          There is also elements page in this template. Click below button to
          check
        </p>
        <ul className="actions special">
          <li>
            <Link to="/Elements" className="button">
              View Elements
            </Link>
          </li>
        </ul>
      </footer>
    </div>
    <Footer />
  </Layout>
);

export default IndexPage;
