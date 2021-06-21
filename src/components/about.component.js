import { Component } from "react";
import '../assets/css/about.css';
import img1 from '../assets/images1/image.png';
import img2 from '../assets/images1/image.png';
import img3 from '../assets/images1/image.png';
import img4 from '../assets/images1/image.png';

export default class About extends Component {
    render() {
        return (
            <div className="geca">
                <h1>Our Team</h1>
                <div className="team">
                    <div className="team_member">
                        <div className="team_img">
                            <img src={img1} alt="Team_image" />
                        </div>
                        <h3>Prathmesh Roy</h3>
                        <p className="role"> OWNER </p>
                        <p>
                            Younge Enterpreneur
                        </p>
                    </div>
                    <div className="team_member">
                        <div className="team_img">
                            <img src={img2} alt="Team_image" />
                        </div>
                        <h3>Rahul Sinha</h3>
                        <p className="role"> CEO </p>
                        <p>
                            M.B.A from IIM-Bangalore
                        </p>
                    </div>
                    <div className="team_member">
                        <div className="team_img">
                            <img src={img3} alt="Team_image" />
                        </div>
                        <h3>Deepak Shinkar</h3>
                        <p className="role"> DIRECTOR </p>
                        <p>
                            Leading Invester
                        </p>
                    </div>
                    <div className="team_member">
                        <div className="team_img">
                            <img src={img4} alt="Team_image" />
                        </div>
                        <h3>Karan Thelkar</h3>
                        <p className="role"> MANAGER</p>
                        <p>
                            Done Master of Hotel management
                        </p>
                    </div>
                </div>
            </div>
        );
    };
}