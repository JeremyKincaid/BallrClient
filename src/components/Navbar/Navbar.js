import React from 'react'; 
import { Navbar, Nav} from 'reactstrap'; 
import Logout from '../Logout/Logout'; 
import './Navbar.css'; 

const Navbars = (props) => {


    return (
            <Navbar className="navbar" expand="md">
                <Nav className="nav" navbar>
                    <Logout clearToken={props.clearToken} />
                </Nav>
            </Navbar>
    )
}

export default Navbars; 