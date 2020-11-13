import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

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
            maxPlayers: maxPlayers
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
              props.toggleCreate();
          })
    }

    return(
        <div>
            <Form>
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
                    <Input id="date" value={date} onChange={e => setDate(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="startTime">Start Time</Label>
                    <Input id="startTime"value={startTime} onChange={e => setStartTime(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="endTime">End Time</Label>
                    <Input id="endTime" value={endTime} onChange={e => setEndTime(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="maxPlayers">Maximum ammount of players(including you)</Label>
                    <Input id="maxPlayers" type="range" min="1" max="50" value={maxPlayers} onChange={e => setMaxPlayers(e.target.value)} />
                    <p>{maxPlayers}</p>
                </FormGroup>
                <Button id="resetForm" onClick={resetForm} type="button">Reset</Button>
                <Button onClick={handleSubmit}>Done</Button>
            </Form>
        </div>
    )
}

export default EventCreate