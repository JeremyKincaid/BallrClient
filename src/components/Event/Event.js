import React, { useState, useEffect } from 'react';
import EventList from './EventList';
import EventCreate from './EventCreate'



const Event = (props) => {

    const [events, setEvents] = useState([]);

    useEffect(
        () => {
            fetchEvents()
        }, []
    )

    const fetchEvents = () => {
        fetch('http://localhost:3000/event', {
            method: 'GET'
        }).then(r => r.json())
          .then(rArr => setEvents(rArr))
    }

    return (
        <div>
            <EventCreate fetchEvents={fetchEvents} />
            <EventList events={events} />
        </div>
    )

}

export default Event;