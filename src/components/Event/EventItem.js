import React, { useEffect, useState } from 'react';
import './EventItem.css';

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
        </div>
    )
}

export default EventItem;