import React, {useState} from 'react'; 
import { Navbar, Nav, NavItem, NavbarToggler} from 'reactstrap'; 
import Logout from '../Logout/Logout'; 
import './Navbar.css'; 

const Navbars = (props) => {


    return (
        <div>
            <Navbar className="navbar" color="light" light expand="md">
                <Nav className="nav" navbar>
                    <Logout clearToken={props.clearToken} />
                </Nav>
            </Navbar>
        </div>
    )
}

export default Navbars; 