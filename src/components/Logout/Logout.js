import React from 'react'; 
import {Button} from 'reactstrap'; 
import './Logout.css'

const Logout = (props) => {

    const logout = (e) => {
        e.preventDefault(); 
        props.clearToken()
    }

    return (
        <div>
            <Button className="button" onClick={logout}> Logout </Button> 
        </div>
    )
}

export default Logout; 
