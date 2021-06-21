import { Component } from "react";
import '../assets/css/contact-us.css';

export default class ContactUs extends Component {
    render() {
        return (
            <section className="contact">
                <div className="content">
                    <h1>Contact Us</h1>
                    <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                </div>
                <div className="containers">
                    <div className="contact-Info">
                        <div className="box">

                            <div className="icon">


                            </div>
                            <div className="text">
                                <h3>Address</h3>
                                <p>ward no 8 ,<br /> krish nagar,<br />samudrapur.</p>

                            </div>


                        </div>
                        <div className="box">

                            <div className="icon">



                            </div>
                            <div className="text">
                                <h3>phone</h3>
                                <p>123-456-789</p>

                            </div>


                        </div>
                        <div className="box">

                            <div className="icon">



                            </div>
                            <div className="text">
                                <h3>Email</h3>
                                <p>teamgeca@gmail.com</p>

                            </div>


                        </div>
                    </div>
                    <div className="contactform">
                        <form>
                            <h2>Send Massage</h2>
                            <div className="input">
                                <input type="text" name="" required="required" />
                                <span>Full Name</span>
                            </div>
                            <div className="input">
                                <input type="text" name="" required="required" />
                                <span>E-mail</span>
                            </div>
                            <div className="input">
                                <textarea name="" required="required"></textarea>
                                <span>Type Your Massage . . .</span>
                            </div>
                            <div className="input">
                                <input type="submit" name="" value="send" />

                            </div>
                        </form>

                    </div>


                </div>

            </section >
        );
    }
}