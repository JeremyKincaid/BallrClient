import React, { useState, useEffect } from 'react';

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
          })
    }

    return(
        <div>
            <form>
                <label htmlFor="eventName">Name</label>
                <input id="eventName" value={name} onChange={e => setName(e.target.value)} />
                <br/>
                <label htmlFor="sport">Sport</label>
                <input id="sport" value={sport} onChange={e => setSport(e.target.value)} />
                <br/>
                <label htmlFor="location">Location</label>
                <input id="location" value={location} onChange={e => setLocation(e.target.value)} />
                <br/>
                <label htmlFor="date">Date</label>
                <input id="date" value={date} onChange={e => setDate(e.target.value)} />
                <br/>
                <label htmlFor="startTime">Start Time</label>
                <input id="startTime"value={startTime} onChange={e => setStartTime(e.target.value)} />
                <br/>
                <label htmlFor="endTime">End Time</label>
                <input id="endTime" value={endTime} onChange={e => setEndTime(e.target.value)} />
                <br/>
                <label htmlFor="maxPlayers">Maximum ammount of players(including you)</label>
                <input id="maxPlayers" type="range" min="1" max="50" value={maxPlayers} onChange={e => setMaxPlayers(e.target.value)} />
                <p>{maxPlayers}</p>
                <br/>
                <button id="resetForm" onClick={resetForm} type="button">Reset</button>
                <button onClick={handleSubmit}>Done</button>
            </form>
        </div>
    )
}

export default EventCreate