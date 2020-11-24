import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './EventCreate.css';

const EventCreate = (props) => {

    const [name, setName] = useState('');
    const [sport, setSport] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [currentPlayers, setCurrentPlayers] = useState(1);
    const [maxPlayers, setMaxPlayers] = useState(1);

    const resetForm = () => {
        setName('');
        setSport('');
        setLocation('');
        setDate('');
        setStartTime('');
        setEndTime('');
        setMaxPlayers(1);
        props.toggle();
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const body = {
            name: name,
            sport: sport,
            location: location,
            date: date,
            startTime: startTime,
            endTime: endTime,
            currentPlayers: currentPlayers,
            maxPlayers: maxPlayers,
            createdById: props.currentUser
        }
        fetch('http://localhost:3000/event/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                //'Authorization': props.sessionToken
            },
            body: JSON.stringify(body)
        }).then(r => r.json())
          .then(rObj => {
              console.log(rObj);
              resetForm();
              props.fetchEvents();
              props.toggle();
          })
    }

    return(
        <div>
            <ModalHeader className="modalHeader"><h1>Create an Event</h1></ModalHeader>
            <Form className="eventForm">

                <ModalBody className="modalBody">
                    <FormGroup>
                        <Label htmlFor="eventName">Name</Label>
                        <Input id="eventName" value={name} onChange={e => setName(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="sport">Sport</Label>
                        <Input id="sport" value={sport} onChange={e => setSport(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="location">Location</Label>
                        <Input id="location" value={location} onChange={e => setLocation(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="date">Date</Label>
                        <Input id="date" type="date" value={date} onChange={e => setDate(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="startTime">Start Time</Label>
                        <Input id="startTime" type="time" value={startTime} onChange={e => setStartTime(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="endTime">End Time</Label>
                        <Input id="endTime" type="time" value={endTime} onChange={e => setEndTime(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="maxPlayers">Maximum amount of players(including you)</Label>
                        <Input id="maxPlayers" type="range" min="1" max="50" value={maxPlayers} onChange={e => setMaxPlayers(e.target.value)} />
                        <p>{maxPlayers}</p>
                    </FormGroup>
                </ModalBody>
                <ModalFooter className="modalFooter">
                    <Button className="cancelBtn" onClick={resetForm} type="button">Cancel</Button>
                    <Button className="submitEventBtn" onClick={handleSubmit}>Done</Button>
                </ModalFooter>
            </Form>
        </div>
    )
}

export default EventCreate