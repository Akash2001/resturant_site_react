import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/menu.css';
import img1 from '../assets/images1/specials/icecup.jpg';
import img2 from '../assets/images1/specials/piza.jpg';
import img3 from '../assets/images1/specials/omlet.jpg';
import MenuItem from "./menu-item.component";

export default class Specials extends Component {
    render() {
        const items = [
            {
                img: img1,
                name: 'Ice-cup   Rs:45'
            },
            {
                img: img2,
                name: 'Pizza   Rs:199'
            },
            {
                img: img3,
                name: 'Omlet   Rs:35'
            }
        ];
        return (
            <div>
                <div id="top">Remove your hunger!!<br />
                    <a href="/order" id="order">Order now</a>
                </div>
                <div id="img">
                    <div id="r" class="row">
                        {items.map((items) => {
                            return <MenuItem {...items} />
                        })}
                    </div>
                </div><br />
            </div>
        );
    }
}