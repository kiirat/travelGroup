import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
          <footer id="footer" className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="footer-about-us">
                            <h3 className="footer-title">Get In Touch</h3>
                            <address className="footer-address">
                            <p><i className="fa fa-globe"> </i> 1102 Saint Marys, Junction City, KS</p>
                            <p><i className="fa fa-phone"> </i>+123 455 755</p>
                            <p><i className="fa fa-envelope-o"> </i> contact@baratlaw.com</p>
                            <p><i className="fa fa-link"> </i> http://www.barrister.com</p>
                            <p><i className="fa fa-compass"> </i>9.00 am to 7.00 pm</p>
                            </address>
                            <p className="footer-social social">
                                <a href="fake_url"><i className="fa fa-twitter"></i></a>
                                <a href="fake_url"><i className="fa fa-facebook"></i></a>
                                <a href="fake_url"><i className="fa fa-google-plus"></i></a>
                                <a href="fake_url"><i className="fa fa-linkedin"></i></a>
                                <a href="fake_url"><i className="fa fa-pinterest"></i></a>
                                <a href="fake_url"><i className="fa fa-dribbble"></i></a>
                            </p>
                        </div>
                    </div>
                    
                    <div className="col-md-3 col-sm-6">
                        <h3 className="footer-title">Our Firm</h3>
                        <ul className="arrow">
                            <li><a href="fake_url">What We Do</a></li>
                            <li><a href="fake_url">How We Help</a></li>
                            <li><a href="fake_url">Our Lawyer</a></li>
                            <li><a href="fake_url">Our Success</a></li>
                            <li><a href="fake_url">Our FAQ</a></li>
                            <li><a href="fake_url">Fill a Form</a></li>
                            <li><a href="fake_url">Practice Area</a></li>
                            <li><a href="fake_url">Latest News</a></li>
                            <li><a href="fake_url">Popular Blog</a></li>
                            <li><a href="fake_url">Resources</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <h3 className="footer-title">Twitter Feed</h3>
                        <ul className="twitter-list">
                            <li>
                                <span><i className="fa fa-twitter"> </i></span>
                                <a href="fake_url" className="date">About 1 Month Ago</a>
                                Newsline - Joomla Magazine Template updated with Full Width Layout http://t.co/QSrd7OtMLm http://t.co/MAosFNi35q
                            </li>
                            <li>
                                <span><i className="fa fa-twitter"> </i></span>
                                <a href="fake_url" className="date">About 16 Days Ago</a>
                                Dart - HTML5 Business Template updated with One Page version #Onepage http://t.co/q2iXJScly0 http://t.co/2znU71ieyD
                            </li>
                        </ul>
                            
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h3 className="footer-title">Quick Contact</h3>
                        <div className="qc-form">
                            <div className="row">
                            <div className="col-xs-6 col-sm-6 col-md-6">
                            <div className="form-group">
                                <input className="form-control" name="firstname" placeholder="Name" type="text" required />
                            </div>
                            </div>
                        <div className="col-xs-6 col-sm-6 col-md-6">
                                <div className="form-group">
                            <input className="form-control" name="email" placeholder="E-mail" type="text" required />
                            </div>
                            </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-md-12">
                            <div className="form-group">
                        <textarea className="form-control" placeholder="Message..." rows="4" name="comment" required></textarea>
                            </div>
                        </div>
                    </div>
                        <div className="form-group">
                                <button type="submit">Send</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <section id="copyright" className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="footer-logo">
                                <img src={require('../../images/logo.png')} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <ul className="nav footer-nav">
                                <li><a href="fake_url">Terms and Condition</a></li>
                                <li><a href="fake_url">Privacy Policy</a></li>
                                <li><a href="fake_url">Legals</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="copyright-info">
                            &copy; Copyright 2016 Barrister. <span>Designed &amp; developed by- <a target="_blank">TrippleS</a></span>
                            </div>
                        </div>
                    </div>
                <div id="back-to-top" data-spy="affix" data-offset-top="10" className="back-to-top affix">
                        <button className="btn btn-primary" title="Back to Top"><i className="fa fa-angle-double-up"></i></button>
                    </div>
                </div>
            </section>
        </footer>
    )
  }
}
export default Footer