import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/menu.css';
import img1 from '../assets/images1/drinks/mathha.jpg';
import img2 from '../assets/images1/drinks/juice.jpg';
import img3 from '../assets/images1/drinks/endrinks.jpg';
import MenuItem from "./menu-item.component";
import { Link } from 'react-router-dom';

export default class Drinks extends Component {
    render() {
        const items = [
            {
                img: img1,
                name: 'Mathha   Rs:20'
            },
            {
                img: img2,
                name: 'Juice   Rs:35'
            },
            {
                img: img3,
                name: 'Energy drink   Rs:45'
            }
        ];
        return (
            <div>
                <div id="top">Fresh drinks to please your thirst<br />
                    <Link to="/order" id="order">Order now</Link>
                </div>
                <div id="img">
                    <div id="r" className="row">
                        {items.map((items) => {
                            return <MenuItem {...items} />
                        })}
                    </div>
                </div><br /><br />
            </div>
        );
    }
}