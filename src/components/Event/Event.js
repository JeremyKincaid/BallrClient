import React, { useState, useEffect } from 'react';
import EventList from './EventList';
import EventCreate from './EventCreate';
import { Button } from 'reactstrap';


const Event = (props) => {

    const [events, setEvents] = useState([]);
    const [isCreating, setIsCreating] = useState(false);

    useEffect(
        () => {
            fetchEvents()
        }, []
    )

    const toggleCreate = () => {
        setIsCreating(!isCreating);
    }

    const fetchEvents = () => {
        fetch('http://localhost:3000/event', {
            method: 'GET'
        }).then(r => r.json())
          .then(rArr => setEvents(rArr))
    }
    if (isCreating) {
        return (
            <div>
                <EventCreate fetchEvents={fetchEvents} toggleCreate={toggleCreate} />
            </div>
        );

    } else {
        return (
            <div>
                <Button className="secondary-button" onClick={toggleCreate}>Create Event</Button>{' '}
                <EventList events={events} />
            </div>
        );
    }
}

export default Event;