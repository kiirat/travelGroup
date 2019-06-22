import React, { Component } from 'react'
import Slider from '../base/Slider'

class Home extends Component {
  render() {
    return (
      <main>
        <Slider />
        <section id="intro" className="intro">
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-sm-6 wow slideInLeft intro-content animated" data-wow-delay=".3s">
                <h3 className="title">Welcome To New Hampsire Barrister Law Firm</h3>
                <h4 className="sub-title">We are award winning representation and a historic track record by a former partner of the legendary <a href="fake_url">Tohnnie L. Hochran</a> and former managing partner of The Firm in New Hampsire.</h4>
                <p>
                  <img className="pull-left img-thumbnail" src={require('../../images/about-image.jpg')} />
                </p>
                <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                <p className="visible-lg visible-md">Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin.Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                <p className="visible-lg visible-md">Orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique lobortis orci ac lacinia. Fusce eu purus eget diam vehicula auctor nec eu elit.</p>
              </div>
              {/* intro-content */}
              <div className="col-md-5 col-sm-6 wow slideInRight animated" data-wow-delay=".5s">
                <h3 className="title">Why Hire Us?</h3>
                <div className="panel-group" id="accordion">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" className="collapsed" href="#collapseOne">We are reliable partner</a>
                      </h4>
                    </div>
                    <div id="collapseOne" className="panel-collapse collapse">
                      <div className="panel-body">
                        <p><span className="list-icon pull-right"> <i className="fa fa-thumbs-up"> </i> </span> Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Proin gravida nibh vel velit auctor</p>
                        <a href="fake_url">Read More</a>
                      </div>
                    </div>
                  </div>

                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a data-toggle="collapse" className="collapsed" data-parent="#accordion" href="#collapseTwo"> We Have Reputation</a>
                      </h4>
                    </div>
                    <div id="collapseTwo" className="panel-collapse collapse">
                      <div className="panel-body">
                        <p><span className="list-icon pull-right"> <i className="fa fa-star"> </i> </span> We are award winning representation and a historic track record by a former partner of the legendary Tohnnie L. Hochran and former</p>
                        <a href="fake_url">Read More</a>
                      </div>
                    </div>
                  </div>

                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a data-toggle="collapse" className="collapsed" data-parent="#accordion" href="#collapseThree"> We Get Results</a>
                      </h4>
                    </div>
                    <div id="collapseThree" className="panel-collapse collapse">
                      <div className="panel-body">
                        <p><span className="list-icon pull-right"> <i className="fa fa-coffee"> </i> </span> Vivamus risus ipsum, vestibulum ut pellentesque iaculis, tempus vitae eros. Aliquam in orci non ipsum eleifend scelerisque.</p>
                        <a href="fake_url">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* row */}
          </div>
          {/* container */}
        </section>
        {/* section intro */}
      </main>
    )
  }
}
export default Home
