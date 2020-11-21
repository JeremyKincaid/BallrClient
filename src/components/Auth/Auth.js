import React, { useState } from 'react'; 
import './Auth.css';
import {Button, Row, Col, Container} from 'reactstrap'; 


const Auth = (props) => {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [displayname, setDisplayName] = useState(''); 

    const [login, setLogin] = useState(true); 

    const loginToggle = () => {
        setLogin(!login)
    }

    
    const handleSubmit = (e) => {
        e.preventDefault(); 

        const url = `http://localhost:3000/user/${login ? 'signin' : 'signup'}` // we hit signin if login is true 
        const body = { // backend wont use firstName and lastName if the user is signing in 
            email: email, 
            password: password, 
            displayname: displayname
        }
        fetch(url, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json', 
            }, 
            body: JSON.stringify(body)
        })
        .then(r => r.json())
        .then(rObj => props.updateToken(rObj.sessionToken, rObj.user.id)); 
    }

    const signupFields = () => {
        if(login) {
            return null//use null when you are trying to return nothing in jsx or you could use undefined or false but null is best
        } else {
            return (
            <div>
                <label htmlFor="displayname">Display Name</label>
                <br />
                <input id="displayname" value={displayname} onChange={e => setDisplayName(e.target.value)} />
            </div>
            )
        }
    }

    return (
        <div className="mainDiv">
            <Container id="Container">
                <Row>
                    <Col>
                        <Row className="logoDiv">
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
                <Row className="formRow">
                    <form>
                        <h1 className="login">{login ? 'Login' : 'Signup'}</h1>
    
                        <label htmlFor="email">Email</label>
                        <br />
                        <input id="email" value={email} onChange={e => setEmail(e.target.value)} /> 
                        <br />
                        <label htmlFor="password">Password</label>
                        <br />
                        <input id="password" value={password} onChange={e => setPassword(e.target.value)} />
                        <br />
                        {signupFields()}
                        <br />
                        <Button id="btn-primary" onClick={handleSubmit}>Submit</Button>
                        <br />
                        <Button type='Button' id="btn-secondary"onClick={loginToggle}>{login ? "Click here to Signup" : "Have a login already? Click here!"}</Button> 
                    </form>
                </Row>
            </Container>
        </div> 
    )
}

export default Auth; 

