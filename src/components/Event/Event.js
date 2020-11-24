import React, { useState, useEffect } from 'react';
import EventList from './EventList';
import EventCreate from './EventCreate';
import { Button, Modal } from 'reactstrap';
import "./Event.css";


const Event = (props) => {

    const [events, setEvents] = useState([]);
    const [modal, setModal] = useState(false);

    useEffect(
        () => {
            fetchEvents()
        }, []
    )

    const toggle = () => {
        setModal(!modal);
    }

    const fetchEvents = () => {
        fetch('http://localhost:3000/event', {
            method: 'GET'
        }).then(r => r.json())
          .then(rArr => setEvents(rArr))
    }

    return (
        <div>
            <Button className="secondary-button" onClick={toggle}>Create Event</Button>{' '}
            <Modal isOpen={modal} className="createModal">
                <EventCreate fetchEvents={fetchEvents} toggle={toggle} currentUser={props.currentUser} />
            </Modal>
            <EventList events={events} fetchEvents={fetchEvents} currentUser={props.currentUser}/>
        </div>
    );
}

export default Event;