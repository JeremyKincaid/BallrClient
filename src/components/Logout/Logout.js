import React from 'react'; 

const Logout = (props) => {

    const logout = () => {
        props.clearToken()
    }
    return (
        <div>
            <img onClick={logout} alt="logout" /> 
        </div>
    )
}

export default Logout; 
