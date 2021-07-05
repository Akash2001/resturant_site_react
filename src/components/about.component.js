import { Component } from "react";
import '../assets/css/about.css';
import img from '../assets/images1/image.png';

const Profile = (props) => {
    return (
        <div className="team_member">
            <div className="team_img">
                <img src={img} alt="Team_image" />
            </div>
            <h3>{props.name}</h3>
            <p className="role">{props.role}</p>
            <p>
                {props.bio}
            </p>
        </div>
    );
}
export default class About extends Component {
    render() {
        const owners = [
            {
                name: 'Prathmesh Roy',
                role: 'OWNER',
                bio: 'Younge Enterpreneur'
            },
            {
                name: 'Rahul Sinha',
                role: 'CEO',
                bio: 'M.B.A from IIM-Bangalore'
            },
            {
                name: 'Deepak Shinkar',
                role: 'DIRECTOR',
                bio: 'Leading Invester'
            },
            {
                name: 'Karan Thelkar',
                role: 'MANAGER',
                bio: 'Done Master of Hotel management'
            }
        ];
        return (
            <div className="geca">
                <h1>Our Team</h1>
                <div className="team">
                    {owners.map((owners) => {
                        return <Profile {...owners} />
                    })}
                </div>
            </div>
        );
    };
}