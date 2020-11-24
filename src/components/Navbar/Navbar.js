import React from 'react'; 
import { Navbar, NavbarText, Nav, NavItem, Container, Row, Col} from 'reactstrap'; 
import Logout from '../Logout/Logout'; 
import './Navbar.css'; 

const Navbars = (props) => {
    return (
        <div id="mainDiv">
            <Navbar className="navbar" expand="md">
                <Nav>
                    <NavItem>   
                        <NavbarText id="ballr">
                            BALLR
                        </NavbarText>
                    </NavItem>
                    <NavItem>
                        <Logout clearToken={props.clearToken} />
                    </NavItem>
                </Nav>
            </Navbar>  
            {/* <Container> 
                <Row>
                        <Row> 
                            <Col sm="2">
                               B
                            </Col> 
                            <Col sm="2">
                               A
                            </Col>
                            <Col sm="2">
                                L
                            </Col>
                            <Col sm="2">
                                L
                            </Col>
                            <Col sm="2">
                                R
                            </Col>
                        </Row>
                </Row>
            </Container> */}
        </div>

    )
}

export default Navbars; 