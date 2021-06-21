import { Component } from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/styles.css';
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import logo from '../assets/images/logo_transparent.png';


export default class Header extends Component {
    constructor(props){
        super(props);

        this.state = {
            home: '',
            menu: ''
        }

        this.activeComponent = this.activeComponent.bind(this);

    }
    activeComponent() {
        if (window.location.pathname === '') {
            this.setState({
                home: 'activeComponent',
                menu: '',
            });
            console.log(this.state.home);
        } else if(window.location.pathname === '/menu/breakfast'){
            this.setState({
                home: '',
                menu: 'activeComponent'
            });
        }
    }
    componentDidMount() {
        this.activeComponent();
    }
    render() {
        return (
            <Navbar bg="dark" className="navbar navbar-dark" expand="lg">
                <Link to="/" className="navbar-brand"><img id="logo" src={logo} alt="logo" />Punchvati</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/" id={this.state.home} className="nav-link" onClick={this.activeComponent}>Home</Link>
                        <Link to='/menu/breakfast' id={this.state.menu} className="nav-link" onClick={this.activeComponent}>Our Menu</Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item><Link to="/about" className="dropdown-item">About</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/contact-us" className="dropdown-item">Contact us</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/order" className="dropdown-item">Order</Link></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}