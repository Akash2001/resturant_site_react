import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/styles.css';
import logo from '../assets/images/punchvati.png';



export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="inner col-lg-4 col-sm-6 col-xs-12 inner1">
                            <div className="row">
                                <div className="col-lg-12 footer_img">
                                    <img src={logo} alt="punchvati_logo_image" />
                                </div>
                                <div className="col-lg-12 footer_quote">
                                    <p className="quote">Nothing People bring together like good Food!</p>
                                </div>
                            </div>
                        </div>
                        <div className="inner col-lg-4 col-sm-6 col-xs-12 hide-sm">
                            <div className="data">
                                <h4>Service Time :</h4><br />
                                <h5>Time : 8:00 AM to 11:00 PM</h5>
                                <h5>Day : Monday-Sunday</h5>
                                <p>(Delivery Available on same time...)</p>
                            </div>
                            <div className="address_div" id="address_">
                                <h4>Address:</h4>
                                <p className="address">ward no 8 ,krish nagar,samudrapur.<br />
                                            123-456-789<br />
                                                teamgeca@gmail.com</p>
                            </div>
                        </div>
                        <div className="inner col-lg-4 col-sm-12 col-xs-12 hide-sm">
                            <div className="links">
                                <ul type="none" className="lists">
                                    <li><a href="/order">Order Food<i className="fas fa-arrow-right" style={{marginLeft: 10+'px'}}></i></a></li>
                                    <li><a href="/about">About Us<i className="fas fa-arrow-right" style={{marginLeft: 10+'px'}}></i></a></li>
                                    <li><a href="/contact-us">Contact Us<i className="fas fa-arrow-right" style={{marginLeft: 10+'px'}}></i></a></li>
                                </ul><hr />
                                <p className="follow">
                                    Follow us for Our New Dish Notification
                                                    </p>
                                <p className="social">
                                    <a href="/"><i className="fab fa-instagram"></i></a>
                                    <a href="/"><i className="fab fa-facebook-square"></i></a>
                                    <a href="/"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="/"><i className="fas fa-envelope-square"></i></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-center copy">&copy;Student of Government college of Engineering Aurangabad!</p>
            </div>
        );
    }
}