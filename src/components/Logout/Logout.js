import React from 'react'; 
import {Button, Nav, NavLink, NavItem} from 'reactstrap'; 
import './Logout.css'

const Logout = (props) => {

    const logout = (e) => {
        e.preventDefault(); 
        props.clearToken()
    }

    return (
        <div className="mainDiv"> 
            <NavLink id="logout" onClick={logout}>
                Logout  
            </NavLink>
                {/* <Button id="button" onClick={logout}> Logout </Button>  */}
        </div> 
    )
}

export default Logout; 
