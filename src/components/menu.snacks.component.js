import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/styles.css';
import '../assets/css/menu.css';
import img1 from '../assets/images1/snacks/noodles.jpg';
import img2 from '../assets/images1/snacks/burger.jpeg';
import img3 from '../assets/images1/snacks/salad.jpg';
import MenuItem from "./menu-item.component";
import { Link } from 'react-router-dom';

export default class Snacks extends Component {
    render() {
        const items = [
            {
                img: img1,
                name: 'Noodles Rs:85'
            },
            {
                img: img2,
                name: 'Burger Rs:65'
            },
            {
                img: img3,
                name: 'Salad Rs:45'
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