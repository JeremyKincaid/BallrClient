import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import apiurl from '../../environment';

const EventEdit = (props) => {

    const [name, setName] = useState(props.ev.name);
    const [sport, setSport] = useState(props.ev.sport);
    const [location, setLocation] = useState(props.ev.location);
    const [date, setDate] = useState(props.ev.date);
    const [startTime, setStartTime] = useState(props.ev.startTime);
    const [endTime, setEndTime] = useState(props.ev.endTime);
    const [currentPlayers, setCurrentPlayers] = useState(1);
    const [maxPlayers, setMaxPlayers] = useState(props.ev.maxPlayers);

    const cancel = () => {
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
        fetch(`${apiurl}/event/edit/${props.ev.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                //'Authorization': props.sessionToken
            },
            body: JSON.stringify(body)
        }).then(r => r.json())
          .then(rObj => {
              console.log(rObj);
              cancel();
              props.fetchEvents();
              props.toggle();
          })
    }

    return(
        <div>
            <ModalHeader className="modalHeader"><h1>Edit Event</h1></ModalHeader>
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
                    <Button className="cancelBtn" onClick={cancel} type="button">Cancel</Button>
                    <Button className="submitEventBtn" onClick={handleSubmit}>Done</Button>
                </ModalFooter>
            </Form>
        </div>
    )
}

export default EventEdit;