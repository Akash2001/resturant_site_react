import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/menu.css';
import { Link } from "react-router-dom";

export default class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            breakfast: '',
            dinner: '',
            sweets: '',
            snacks: '',
            drinks: '',
            specials: ''
        }

        this.activeComponent = this.activeComponent.bind(this);

    }
    activeComponent() {
        if (window.location.pathname === '/menu/breakfast') {
            this.setState({
                breakfast: 'activeComponent',
                dinner: '',
                sweets: '',
                snacks: '',
                drinks: '',
                specials: ''
            });
        } else if (window.location.pathname === '/menu/dinner') {
            this.setState({
                breakfast: '',
                dinner: 'activeComponent',
                sweets: '',
                snacks: '',
                drinks: '',
                specials: ''
            });
        } else if (window.location.pathname === '/menu/sweets') {
            this.setState({
                breakfast: '',
                dinner: '',
                sweets: 'activeComponent',
                snacks: '',
                drinks: '',
                specials: ''
            });
        } else if (window.location.pathname === '/menu/snacks') {
            this.setState({
                breakfast: '',
                dinner: '',
                sweets: '',
                snacks: 'activeComponent',
                drinks: '',
                specials: ''
            });
        } else if (window.location.pathname === '/menu/drinks') {
            this.setState({
                breakfast: '',
                dinner: '',
                sweets: '',
                snacks: '',
                drinks: 'activeComponent',
                specials: ''
            });
        } else {
            this.setState({
                breakfast: '',
                dinner: '',
                sweets: '',
                snacks: '',
                drinks: '',
                specials: 'activeComponent'
            });
        }
    }
    componentDidMount() {
        this.activeComponent();
    }
    render() {
        return (
            <div id="menu">
                <h2>Menu</h2>

                <div id="mnav" className="row">
                    <div className="inner col-4" id={this.state.breakfast}><p onClick={this.activeComponent}><Link to="/menu/breakfast">Breakfast</Link></p></div>
                    <div className="inner col-4" id={this.state.dinner}><p onClick={this.activeComponent}><Link to="/menu/dinner">Dinner</Link></p></div>
                    <div className="inner col-4" id={this.state.sweets}><p onClick={this.activeComponent}><Link to="/menu/sweets">Sweets</Link></p></div>
                </div>

                <div id="mnav2" className="row">
                    <div className="inner col-6" id={this.state.snacks}><p onClick={this.activeComponent}><Link to="/menu/snacks">Snacks</Link></p></div>
                    <div className="inner col-6" id={this.state.drinks}><p onClick={this.activeComponent}><Link to="/menu/drinks">Drinks</Link></p></div>
                </div>

                <div id="mnav3" className="row">
                    <div className="inner col-12" id={this.state.specials}><p onClick={this.activeComponent}><Link to="/menu/specials">Specials</Link></p></div>
                </div>

            </div>
        );
    }
}