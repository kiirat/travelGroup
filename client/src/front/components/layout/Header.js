import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom'

import classnames from 'classnames'
import { connect } from 'react-redux'
import { logoutUser } from '../../../actions/authAction'


class Header extends Component {
    onLogOutClick (e) {
        e.preventDefault();
        this.props.logoutUser()
    }
  render() {
    const { isAuthenticated, user } = this.props.auth;
    const logOut =(
        <a href="" onClick={this.onLogOutClick.bind(this)} className="logout">    
            <img 
                className='rounded-circle'
                src={user.avatar}
            />
            Log Out
        </a>
    )

    return (
        <header id="header" className="header header-front" role="banner">
            <div id="top-bar" className="top-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-xs-6">
                            <div className="top-social">
                                <a href="fake_url"  className="fb" ><i className="fa fa-facebook"> </i></a>
                                <a href="fake_url"  className="twt" ><i className="fa fa-twitter"> </i></a>
                                <a href="fake_url"  className="gplus" ><i className="fa fa-google-plus"> </i></a>
                                <a href="fake_url"  className="youtube" ><i className="fa fa-youtube"> </i></a>
                                <a href="fake_url"  className="linkdin" ><i className="fa fa-linkedin"> </i></a>
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
                                <a href="fake_url"  title="Europe" >
                                    <img src={require('../../images/flag/eu.png')} />
                                </a>
                                <a href="fake_url"  title="German" >
                                    <img src={require('../../images/flag/fr.png')} />
                                </a>
                                <a href="fake_url"  title="French" >
                                    <img src={require('../../images/flag/gr.png')} />
                                </a>
                                <a href="fake_url"  title="Spanish" >
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
                           <Link to='/'  >
                                <div className="logo"></div>
                           </Link> 
                           </div>                   
                    </div>
                    <nav className="collapse navbar-collapse navbar-right" role="navigation">
                    <ul className="nav navbar-nav">
                        <li className="dropdown active">
                             <a href="fake_url"   className="dropdown-toggle" data-toggle="dropdown">Home <i className="fa fa-angle-down"></i></a>
                             <div className="dropdown-menu">
                                <ul>
                                   <li className="active"><a href="fake_url"  >Home 1</a></li>
                                   <li><a href="fake_url"  >Home 2</a></li>
                                   <li><a href="fake_url" >Home 3</a></li>
                                </ul>
                             </div>
                         </li>
    
                        <li className="dropdown">
                             <a href="fake_url"   className="dropdown-toggle" data-toggle="dropdown">Our Firm <i className="fa fa-angle-down"></i></a>
                             <div className="dropdown-menu">
                                    <ul>
                               <li><a href="fake_url"  >About Us</a></li>
                               <li><a href="fake_url"  >Gallery</a></li>
                               <li><a href="fake_url"  >Testimonials</a></li>
                               <li><a href="fake_url"  >Faq</a></li>
                               <li><a href="fake_url"  >Case Results</a></li>
                            </ul>
                             </div>
                         </li>
    
                        <li className="dropdown megamenu">
                            <a href="fake_url"   className="dropdown-toggle" data-toggle="dropdown">Practice Areas <i className="fa fa-angle-down"></i></a>
                            <div className="dropdown-menu container row">
                                <ul className="col-sm-3" role="menu">
                                <li><a href="fake_url" >Vehicle Accident</a></li>
                                <li><a href="fake_url" >Insurance Claims</a></li>
                                <li><a href="fake_url" >Medical Malpractice</a></li>
                                <li><a href="fake_url" >Premises Liability</a></li>
                             </ul>
                            <ul className="col-sm-3" role="menu">
                               <li><a href="fake_url" >Product Liability</a></li>
                               <li><a href="fake_url" >Tax Disputes</a></li>
                               <li><a href="fake_url" >Aviation Accident</a></li>
                               <li><a href="fake_url" >Child Abuse</a></li>
                            </ul>
                            <ul className="col-sm-3" role="menu">
                                <li><a href="fake_url" >Real Estate</a></li>
                               <li><a href="fake_url" >Labour Law</a></li>
                               <li><a href="fake_url" >Criminal Defence</a></li>
                               <li><a href="fake_url" >Family Law</a></li>
                            </ul>
                            <ul className="col-sm-3" role="menu">
                               <li><a href="fake_url" >Real Property Litigation</a></li>
                               <li><a href="fake_url" >Regulated Substances</a></li>
                               <li><a href="fake_url" >Immigration Law</a></li>
                               <li><a href="fake_url" >Industry Law</a></li>
                            </ul>
                            </div>
                        </li>
    
                        <li className="dropdown">
                             <a href="fake_url"   className="dropdown-toggle" data-toggle="dropdown">Attorneys <i className="fa fa-angle-down"></i></a>
                             <div className="dropdown-menu">
                                    <ul>
                               <li><a href="fake_url" >Attorneys</a></li>
                               <li><a href="fake_url" >Attorneys Single</a></li>
                               <li><a href="fake_url" >Attorneys Single 2</a></li>
                            </ul>
                             </div>
                         </li>
    
                         <li className="dropdown visible-lg visible-md">
                             <a href="fake_url"   className="dropdown-toggle" data-toggle="dropdown">Features <i className="fa fa-angle-down"></i></a>
                             <div className="dropdown-menu">
                                    <ul>
                               <li><a href="fake_url" >Typography</a></li>
                               <li><a href="fake_url" >Accordion</a></li>
                               <li><a href="fake_url" >Tabs</a></li>
                               <li><a href="fake_url" >Buttons</a></li>
                               <li><a href="fake_url" >Fun Facts</a></li>
                               <li><a href="fake_url" >Forms</a></li>
                               <li><a href="fake_url" >Lists</a></li>
                               <li><a href="fake_url" >Carousel</a></li>
                            </ul>
                             </div>
                         </li>
    
                         <li className="dropdown">
                             <a href="fake_url"   className="dropdown-toggle" data-toggle="dropdown">News <i className="fa fa-angle-down"></i></a>
                             <div className="dropdown-menu">
                                    <ul>
                               <li><a href="fake_url" >News</a></li>
                               <li><a href="fake_url" >News Single</a></li>
                            </ul>
                             </div>
                         </li>
    
                       <li><a href="fake_url" >Contact</a></li>
                    </ul>
                </nav>
    
                </div>
            </div> 
            {isAuthenticated ? logOut : null}
        </header>
    )
  }
}
Header.protoTypes = {
    logoutUser : PropTypes.func.isRequired,
    auth : PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})
export default connect(mapStateToProps, { logoutUser })(withRouter(Header))