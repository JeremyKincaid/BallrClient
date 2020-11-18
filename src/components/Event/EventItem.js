import React from 'react';
import './EventItem.css';

const EventItem = (props) => {

    return(
        <div className="ev-card">
            <h3>{props.ev.name}</h3>
            <p>Sport: {props.ev.sport}.</p>
            <p>Location: {props.ev.location}</p>
            <p>Date: {props.ev.date}</p>
            <p>Starts: {props.ev.startTime}</p>
            <p>Ends: {props.ev.endTime}</p>
            <p>{props.ev.currentPlayers} out of {props.ev.maxPlayers}</p>
        </div>
    )
}

export default EventItem