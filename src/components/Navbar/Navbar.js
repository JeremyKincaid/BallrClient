import React from 'react'; 
import { Navbar, Nav, Container, Row, Col} from 'reactstrap'; 
import Logout from '../Logout/Logout'; 
import './Navbar.css'; 

const Navbars = (props) => {
    return (
        <div>
            <Navbar className="navbar" expand="md">
                <Nav className="nav" navbar>
                    <Logout clearToken={props.clearToken} />
                </Nav>
            </Navbar>
            <Container>
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
            </Container>
        </div>
    )
}

export default Navbars; 