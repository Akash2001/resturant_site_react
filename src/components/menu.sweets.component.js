import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/styles.css';
import '../assets/css/menu.css';
import img1 from '../assets/images1/sweet/shira.jpg';
import MenuItem from "./menu-item.component";
import { Link } from 'react-router-dom';

export default class Sweets extends Component {
    render() {
        const items = [
            {
                img: img1,
                name: 'Shira   Rs:25'
            }
        ];
        return (
            <div>
                <div id="top">Sweets for completion of dinner<br />
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