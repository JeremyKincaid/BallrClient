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
                    <Col>
                        <Row>
                            <Col sm="2">
                                <h2>B</h2>
                            </Col>
                            <Col sm="2">
                                <h2>A</h2>
                            </Col>
                            <Col sm="2">
                                <h2>L</h2>
                            </Col>
                            <Col sm="2">
                                <h2>L</h2>
                            </Col>
                            <Col sm="2">
                                <h2>R</h2>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Navbars; 