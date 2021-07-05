import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/styles.css';
import { Link } from 'react-router-dom';
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import logo from '../assets/images/logo_transparent.png';


export default class Header extends Component {
    constructor(props){
        super(props);

        this.activeComponent = this.activeComponent.bind(this);

        this.state = {
            home: '',
            menu: ''
        }
    }
    activeComponent() {
        if (window.location.pathname === '/') {
            this.setState({
                home: 'activeComponant',
                menu: '',
            });
        } else if(window.location.pathname === '/menu/breakfast'){
            this.setState({
                home: '',
                menu: 'activeComponant'
            });
        }else{
            this.setState({
                home: '',
                menu: ''
            });
        }
    }
    componentDidMount(){
        this.activeComponent();
    }
    render() {
        return (
            <Navbar bg="dark" className="navbar navbar-dark" expand="lg">
                <div onClick={this.activeComponent}><Link to="/" className="navbar-brand"><img id="logo" src={logo} alt="logo" />Punchvati</Link></div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <div onClick={this.activeComponent}><Link to="/" id={this.state.home} className="nav-link">Home</Link></div>
                        <div onClick={this.activeComponent}><Link to='/menu/breakfast' id={this.state.menu} className="nav-link">Our Menu</Link></div>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <div onClick={this.activeComponent}><NavDropdown.Item><Link to="/about" className="dropdown-item">About</Link></NavDropdown.Item></div>
                            <div onClick={this.activeComponent}><NavDropdown.Item><Link to="/contact-us" className="dropdown-item">Contact us</Link></NavDropdown.Item></div>
                            <div onClick={this.activeComponent}><NavDropdown.Item><Link to="/order" className="dropdown-item">Order</Link></NavDropdown.Item></div>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}