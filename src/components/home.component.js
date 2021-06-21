import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/styles.css';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/images/car2.jpg';
import img2 from '../assets/images/car1.jpg';
import img3 from '../assets/images/car3.jpg';
import feedbackImg from '../assets/images/feed.png';
import dosaImg from "../assets/images1/dosa.jpg";
import mathaImg from "../assets/images1/drinks/mathha.jpg";
import pannerImg from '../assets/images1/dinner/panner.jpg';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Carousel className="car">
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src={img2}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>


                <div className="container myfeed">
                    <h2 className="fdbk">Feedback of our Loveable Customer...</h2>
                    <div className="row">


                        <div className="feedback col-lg-6 col-md-6 col-xs-12">
                            <div className="row feedb">
                                <div className="col-lg-4 image1">
                                    <img src={feedbackImg} alt="Not Found" />
                                    <div className="center">
                                        <span class="stars">
                                            <i class="fa fa-star checked"></i>
                                            <i class="fa fa-star checked"></i>
                                            <i class="fa fa-star checked"></i>
                                            <i class="fa fa-star checked"></i>
                                            <i class="fa fa-star checked"></i>
                                        </span><br />
                                        <span className="name" className="center">Anand Chavan</span>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <p>Nice food.<br />Food was delicious and nutritive also.</p>
                                </div>
                            </div>
                        </div>


                        <div className="feedback col-lg-6 col-md-6 col-xs-12">
                            <div className="row feedb">
                                <div className="col-lg-4 image1">
                                    <img src={feedbackImg} alt="Not Found" />
                                    <div className="center">
                                        <span class="stars">
                                            <i class="fa fa-star checked"></i>
                                            <i class="fa fa-star checked"></i>
                                            <i class="fa fa-star checked"></i>
                                            <i class="fa fa-star checked"></i>
                                            <i class="fa fa-star-o"></i>
                                        </span><br />
                                        <span className="name" className="center">Omkar Desai</span>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <p>The environment of the restaurant is hygenic. <br />Provided good service</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">


                        <div className="feedback col-lg-6 col-md-6 col-xs-12">
                            <div className="row feedb">
                                <div className="col-lg-4 image1">
                                    <img src={feedbackImg} alt="Not Found" />
                                    <div >
                                        <span className="stars">
                                            <i class="fa fa-star checked"></i>
                                            <i class="fa fa-star checked"></i>
                                            <i class="fa fa-star checked"></i>
                                            <i class="fa fa-star checked"></i>
                                            <i class="fa fa-star-o"></i>
                                        </span><br />
                                        <span className="name" className="center">Jayant Updhyay</span>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <p>Good delivery.<br />Deliveres food good packed and fresh.<br />Easy to order food.</p>
                                </div>
                            </div>
                        </div>



                        <div className="feedback col-lg-6 col-md-6 col-xs-12">
                            <div className="row feedb">
                                <div className="col-lg-4 image1">
                                    <img src={feedbackImg} alt="Not Found" />
                                    <div >
                                        <span className="stars">
                                            <i class="fa fa-star checked"></i>
                                            <i class="fa fa-star checked"></i>
                                            <i class="fa fa-star checked"></i>
                                            <i class="fa fa-star checked"></i>
                                            <i class="fa fa-star checked"></i>
                                        </span><br />
                                        <span className="name" className="center">Ramesh Dev</span>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <p>They keep every type of food.<br />Liked the variety and management.<br />They don't take much time to serve food.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <br /><br /><br />
                <div className="container special" id="sps">
                    <h2 className="success">Today's Special in Our Menu...</h2>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-xs-12 special1">
                            <img src={dosaImg} alt="" />
                            <p>Yummy Dosa</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12 special2">
                            <img src={pannerImg} alt="" />
                            <p>Tasty Paneer </p>
                        </div>
                        <div className="col-lg-4 col-md-12 col-xs-12 special3">
                            <img src={mathaImg} alt="" />
                            <p>Fresh and Cold mattha</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}