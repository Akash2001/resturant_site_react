import { Component } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/menu.css';
import img1 from '../assets/images1/dinner/panner.jpg';
import img2 from '../assets/images1/dinner/full.jpg';
import img3 from '../assets/images1/dinner/brinjal.jpg';
import img4 from '../assets/images1/dinner/spec-dinner.jpg';
import MenuItem from "./menu-item.component";

export default class Dinner extends Component {
    render() {
        const items = [
            {
                img: img1,
                name: 'Panner   Rs.120'
            },
            {
                img: img2,
                name: 'Full Dinner  Rs:225'
            },
            {
                img: img3,
                name: 'Brinjal   Rs:95'
            },
            {
                img: img4,
                name: 'Spec dinner Rs:275'
            }
        ];
        return (
            <div>
                <div id="top">Remove your hunger!!<br />
                    <Link to="/order" id="order">Order now</Link>
                </div>

                <div id="img">
                    <div id="r" className="row">
                        {items.map((items) => {
                            return <MenuItem {...items} />
                        })}
                    </div>
                </div><br />
            </div>
        );
    }
}