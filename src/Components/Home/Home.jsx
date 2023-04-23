import React, { Component } from 'react';
import './Home.css';
import { FaNodeJs, FaReact} from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';

class Home extends Component {
  render() {
    return (
      <section id="banner" className="banner">
        <div className="container p-0">
          <div className="row">
            <div className="col-lg-6">
              <div className="banner-left">
                <h1 className="text-capitalize">
                  Welcome to
                  <span className="text-uppercase"> BooK-List </span>
                   Application
                </h1>
                
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-right">
                <h1 className="text-capitalize">
                  <DiMongodb className="text-success" />
                  <img
                    src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg"
                    alt="e"
                  />
                  <FaReact className="text-info" />
                  <FaNodeJs className="text-success" />
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
