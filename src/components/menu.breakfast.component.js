import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/menu.css';
import img1 from '../assets/images1/breakfast/coffe.jpeg';
import img2 from '../assets/images1/breakfast/dosa1.jpg';
import img3 from '../assets/images1/breakfast/idli.jpg';
import img4 from '../assets/images1/breakfast/pavbhaji.jpg';
import img5 from '../assets/images1/breakfast/puri.jpg';
import img6 from '../assets/images1/breakfast/vada.jpg';
import MenuItem from "./menu-item.component";

export default class Breakfast extends Component {
	render() {
		const items = [
			{
				img: img1,
				name: 'Coffe   Rs:15'		
			},
			{
				img: img2,
				name: 'Dosa   Rs:45'
			},
			{
				img: img3,
				name: 'Idli   Rs:35'
			},
			{
				img: img4,
				name: 'Pav-Bhaji Rs:55'
			},
			{
				img: img5,
				name: 'Puri-Bhaji Rs:60'
			},
			{
				img: img6,
				name: 'Vada Rs.20'
			},
		];
		return (
			<div>
				<div id="img">
					<div id="r" className="row">
						{items.map((items)=>{
							return <MenuItem {...items} />
						})}
					</div>
				</div><br /><br />
			</div>
		);
	}
}