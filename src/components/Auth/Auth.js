import React, { useState } from 'react'; 
import './Auth.css';


const Auth = (props) => {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [rating, setRating] = useState(''); 
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
            rating: rating, 
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
        .then(rObj => props.updateToken(rObj.sessionToken)); 
    }

    const signupFields = () => {
        if(login) {
            return null//use null when you are trying to return nothing in jsx or you could use undefined or false but null is best
        } else {
            return (
            <div>
                {/* <label htmlFor="email">Email</label>
                <br />
                <input id="email" value={email} onChange={e => setEmail(e.target.value)} />
                <br />
                <label htmlFor="password">Password</label>
                <br />
                <input id="password" value={password} onChange={e => setPassword(e.target.value)} />
                <br /> */}
                <label htmlFor="rating">Rating</label>
                <br />
                <input id="rating" value={rating} onChange={e => setRating(e.target.value)} />
                <br />
                <label htmlFor="displayname">Display Name</label>
                <br />
                <input id="displayname" value={displayname} onChange={e => setDisplayName(e.target.value)} />
            </div>
            )
        }
    }

    return (
        <div className="mainDiv">
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
                <button className="submitButton"onClick={handleSubmit}>Submit</button>
                <br />
                <button type='button' className="loginButton"onClick={loginToggle}>{login ? "Click here to Signup" : "Have a login already? Click here!"}</button> 
            </form>
        </div>
    )
}

export default Auth; 

