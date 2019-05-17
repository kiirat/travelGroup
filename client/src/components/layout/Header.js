import React, { Component } from 'react'
import $ from 'jquery'


class Header extends Component {
    componentDidMount = () => {
        this.scrollPage()

    }
    scrollPage = ()=> {
        $(window).on('scroll',function() {
            if ($(this).scrollTop() > 100){  
                $('.top-bar').slideUp(300);
                $("header").addClass("header-fixed");
            }
            else{
                $('.top-bar').slideDown(300);
                $("header").removeClass("header-fixed");
            }
        });
    }
  render() {
    return (
        <header id="header" className="header" role="banner">
            <div id="top-bar" className="top-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-xs-6">
                            <div className="top-social">
                                <a className="fb" ><i className="fa fa-facebook"> </i></a>
                                <a className="twt" ><i className="fa fa-twitter"> </i></a>
                                <a className="gplus" ><i className="fa fa-google-plus"> </i></a>
                                <a className="youtube" ><i className="fa fa-youtube"> </i></a>
                                <a className="linkdin" ><i className="fa fa-linkedin"> </i></a>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-6 col-md-offset-2">
                            <ul className="top-info">
                                <li><i className="fa fa-envelope">&nbsp;</i> Info@baratlaw.com</li>
                                <li><i className="fa fa-phone">&nbsp;</i> Call Us: (20) 3893-837</li>
                            </ul>
                        </div>
                        <div className="col-md-2 visible-lg visible-md">
                            <div className="lang-flag">
                                <a title="Europe" >
                                    <img src={require('../../images/flag/eu.png')} />
                                </a>
                                <a title="German" >
                                    <img src={require('../../images/flag/fr.png')} />
                                </a>
                                <a title="French" >
                                    <img src={require('../../images/flag/gr.png')} />
                                </a>
                                <a title="Spanish" >
                                    <img src={require('../../images/flag/sp.png')} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navbar ts-mainnav">
                <div className="container">
                    <div className="navbar-header">
                           <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                          <span className="sr-only">Toggle navigation</span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                           </button>
                           <div className="navbar-brand">
                           <a >
                                <div className="logo"></div>
                           </a> 
                           </div>                   
                    </div>
                    <nav className="collapse navbar-collapse navbar-right" role="navigation">
                    <ul className="nav navbar-nav">
                        <li className="dropdown active">
                             <a  className="dropdown-toggle" data-toggle="dropdown">Home <i className="fa fa-angle-down"></i></a>
                             <div className="dropdown-menu">
                                <ul>
                                   <li className="active"><a >Home 1</a></li>
                                   <li><a >Home 2</a></li>
                                   <li><a>Home 3</a></li>
                                </ul>
                             </div>
                         </li>
    
                        <li className="dropdown">
                             <a  className="dropdown-toggle" data-toggle="dropdown">Our Firm <i className="fa fa-angle-down"></i></a>
                             <div className="dropdown-menu">
                                    <ul>
                               <li><a >About Us</a></li>
                               <li><a >Gallery</a></li>
                               <li><a >Testimonials</a></li>
                               <li><a >Faq</a></li>
                               <li><a >Case Results</a></li>
                            </ul>
                             </div>
                         </li>
    
                        <li className="dropdown megamenu">
                            <a  className="dropdown-toggle" data-toggle="dropdown">Practice Areas <i className="fa fa-angle-down"></i></a>
                            <div className="dropdown-menu container row">
                                <ul className="col-sm-3" role="menu">
                                <li><a>Vehicle Accident</a></li>
                                <li><a>Insurance Claims</a></li>
                                <li><a>Medical Malpractice</a></li>
                                <li><a>Premises Liability</a></li>
                             </ul>
                            <ul className="col-sm-3" role="menu">
                               <li><a>Product Liability</a></li>
                               <li><a>Tax Disputes</a></li>
                               <li><a>Aviation Accident</a></li>
                               <li><a>Child Abuse</a></li>
                            </ul>
                            <ul className="col-sm-3" role="menu">
                                <li><a>Real Estate</a></li>
                               <li><a>Labour Law</a></li>
                               <li><a>Criminal Defence</a></li>
                               <li><a>Family Law</a></li>
                            </ul>
                            <ul className="col-sm-3" role="menu">
                               <li><a>Real Property Litigation</a></li>
                               <li><a>Regulated Substances</a></li>
                               <li><a>Immigration Law</a></li>
                               <li><a>Industry Law</a></li>
                            </ul>
                            </div>
                        </li>
    
                        <li className="dropdown">
                             <a  className="dropdown-toggle" data-toggle="dropdown">Attorneys <i className="fa fa-angle-down"></i></a>
                             <div className="dropdown-menu">
                                    <ul>
                               <li><a>Attorneys</a></li>
                               <li><a>Attorneys Single</a></li>
                               <li><a>Attorneys Single 2</a></li>
                            </ul>
                             </div>
                         </li>
    
                         <li className="dropdown visible-lg visible-md">
                             <a  className="dropdown-toggle" data-toggle="dropdown">Features <i className="fa fa-angle-down"></i></a>
                             <div className="dropdown-menu">
                                    <ul>
                               <li><a>Typography</a></li>
                               <li><a>Accordion</a></li>
                               <li><a>Tabs</a></li>
                               <li><a>Buttons</a></li>
                               <li><a>Fun Facts</a></li>
                               <li><a>Forms</a></li>
                               <li><a>Lists</a></li>
                               <li><a>Carousel</a></li>
                            </ul>
                             </div>
                         </li>
    
                         <li className="dropdown">
                             <a  className="dropdown-toggle" data-toggle="dropdown">News <i className="fa fa-angle-down"></i></a>
                             <div className="dropdown-menu">
                                    <ul>
                               <li><a>News</a></li>
                               <li><a>News Single</a></li>
                            </ul>
                             </div>
                         </li>
    
                       <li><a>Contact</a></li>
                    </ul>
                </nav>
    
                </div>
            </div> 
        </header>
    )
  }
}
export default Header