import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class Slider extends Component {
  render() {
    return (
        <section id="main-slide" className="carousel slide no-padding top-gap" data-ride="carousel">
            <OwlCarousel        
                items={1}
                className="carousel-inner"
                loop
                nav
                navText={["<i class='fa fa-angle-left left carousel-control prev'></i>","<i class='fa fa-angle-right right carousel-control next'></i>"]}
            >
                <div className="item">
                    <img src={require('../../images/slider/bg1.jpg')} />
                    <div className="slider-content">
                        <div className="col-md-12 text-center">
                            <div className="slider-text italic">
                                <h2 className="animated2">"Fighting for Our Clinets</h2>
                                <h2 className="animated3">is Our Greatest Reward"</h2>
                                <p className="animated4 btn btn-primary btn-min-block white">Luana Tendor, Partner</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img src={require('../../images/slider/bg2.jpg')} />
                    <div className="slider-content">
                        <div className="col-md-12">
                            <div className="slider-text">
                                <h2 className="animated7">We Offer Our Clients</h2>
                                <h3 className="animated8">An Expert Legal Advice</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img src={require('../../images/slider/bg2.jpg')} />
                    <div className="slider-content">
                        <div className="col-md-12 text-center">
                            <h2 className="animated4"> We Are Passionate And Concern</h2>
                            <h3 className="animated5">About Legal Help</h3>	
                            <p className="animated6"><a href="#" className="slider btn btn-primary white">Want Free Case Evaluation <i className="fa fa-long-arrow-right"> </i></a></p>	     
                        </div>
                    </div>
                </div>
            </OwlCarousel>
        </section> 
    )
  }
}
export default Slider