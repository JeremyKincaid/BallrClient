import React, { useEffect, useState } from 'react';
import './EventItem.css';
import { Button } from 'reactstrap';


const EventItem = (props) => {

    const [hostName, setHostName] = useState();

    useEffect(
        () => {
            fetchHostName()
        }
    )

    const fetchHostName = () => {
        fetch(`http://localhost:3000/user/${props.ev.createdById}`, {
            method: 'GET'
        }).then(r => r.json())
          .then(rObj => {
            console.log("displayname:" + props.ev.createdById +rObj.user.displayname)  
            setHostName(rObj.user.displayname)})
    }
    if (props.ev.createdById === props.currentUser) {
        return(
            <div className="ev-card">
            <h3>{props.ev.name}</h3>
            <p>Sport: {props.ev.sport}.</p>
            <p>Location: {props.ev.location}</p>
            <p>Date: {props.ev.date}</p>
            <p>Starts: {props.ev.startTime}</p>
            <p>Ends: {props.ev.endTime}</p>
            <p>{props.ev.currentPlayers} out of {props.ev.maxPlayers}</p>
            <p>Host: {hostName}</p>
            
            <Button className="secondary-button">Edit</Button>{' '}
        </div>
        )
    } else {
        return(
            <div className="ev-card">
                <h3>{props.ev.name}</h3>
                <p>Sport: {props.ev.sport}.</p>
                <p>Location: {props.ev.location}</p>
                <p>Date: {props.ev.date}</p>
                <p>Starts: {props.ev.startTime}</p>
                <p>Ends: {props.ev.endTime}</p>
                <p>{props.ev.currentPlayers} out of {props.ev.maxPlayers}</p>
                <p>Host: {hostName}</p>
                
                <Button className="secondary-button">Sign up</Button>{' '}
            </div>
        )
    }
}

export default EventItem;