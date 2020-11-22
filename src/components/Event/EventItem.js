import React, { useEffect, useState } from 'react';
import EventEdit from './EventEdit';
import './EventItem.css';
import { Button, Modal, Col } from 'reactstrap';


const EventItem = (props) => {

    const [hostName, setHostName] = useState();
    const [isSignedUp, setIsSignedUp] = useState(false);
    const [modal, setModal] = useState(false);

    useEffect(
        () => {
            fetchHostName()
        }
    )

    useEffect(
        () => {
            getSignedEvents()
        }
    )

    const toggle = () => {
        setModal(!modal);
    }

    const fetchHostName = () => {
        fetch(`http://localhost:3000/user/${props.ev.createdById}`, {
            method: 'GET'
        }).then(r => r.json())
          .then(rObj => {
            setHostName(rObj.user.displayname)
        })
    }

    const eventSignUp = async (e) => {
        e.preventDefault()
        const body = {
            playerId: props.currentUser,
            eventId: props.ev.id
        }

        let players;

        const response1 = await fetch('http://localhost:3000/event/signup/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })

        const json1 = await response1.json();
        console.log(json1);

        const response2 = await fetch(`http://localhost:3000/event/findEvents/${ props.ev.id }`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json2 = await response2.json();
        players = await json2.length;
        console.log(json2);
        const reqBody = {
            currentPlayers: players++
        }

        fetch(`http://localhost:3000/event/updatePlayers/${ props.ev.id }`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reqBody)
        })
        .then(r => r.json())
        .then(rObj => {
            console.log(rObj);
        })
        .catch(err => console.log(err))
    }

    const getSignedEvents = () => {
        fetch(`http://localhost:3000/event/findMyEvents/${props.ev.id}/${props.currentUser}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(r => r.json())
        .then(rArr => {
            console.log(rArr)
            rArr.length > 0 ? setIsSignedUp(true) : setIsSignedUp(false);
        })
        .catch(err => console.log(err))

    }

    const deleteEvent = async () => {
        const response = await fetch(`http://localhost:3000/event/delete/${props.ev.id}`, {
            method: 'DELETE'
        })
        const json = await response.json();
        console.log(json);
        props.fetchEvents();
    }

    const deleteSignUp = () => {
        fetch(`http://localhost:3000/event/deleteSignup/${props.currentUser}/${props.ev.id}`, {
            method: 'DELETE'
        })
        .then(r => r.json())
        .then(rObj => console.log(rObj))
        .catch(err => console.log(err))
        props.fetchEvents();
    }


    if (props.ev.createdById == props.currentUser) {
        return(
            <Col>
                <div className="ev-card">
                    <h1>Your Event</h1>
                    <h3>{props.ev.name}</h3>
                    <p>Sport: {props.ev.sport}</p>
                    <p>Location: {props.ev.location}</p>
                    <p>Date: {props.ev.date}</p>
                    <p>Starts: {props.ev.startTime}</p>
                    <p>Ends: {props.ev.endTime}</p>
                    <p>{props.ev.currentPlayers} out of {props.ev.maxPlayers}</p>
                    <p>Host: {hostName}</p>
                    
                    <Modal isOpen={modal} className="createModal">
                        <EventEdit fetchEvents={props.fetchEvents} ev={props.ev} toggle={toggle} currentUser={props.currentUser} />
                    </Modal>
                    <Button className="deleteEvent" onClick={deleteEvent}>Delete Event</Button>
                    <Button className="secondary-button" onClick={toggle}>Edit</Button>{' '}
                </div>
            </Col>
        )
    } else if (isSignedUp === true) {
        return(
            <Col>
                <div className="ev-card">
                    <h3>You're signed up</h3>
                    <br/>
                    <h3>{props.ev.name}</h3>
                    <p>Sport: {props.ev.sport}</p>
                    <p>Location: {props.ev.location}</p>
                    <p>Date: {props.ev.date}</p>
                    <p>Starts: {props.ev.startTime}</p>
                    <p>Ends: {props.ev.endTime}</p>
                    <p>{props.ev.currentPlayers} out of {props.ev.maxPlayers}</p>
                    <p>Host: {hostName}</p>
                    
                    <Button className="secondary-button" onClick={deleteSignUp}>Cancel Sign up</Button>{' '}
                </div>
            </Col>
        )
    } else {
        return(
            <Col>
                <div className="ev-card">
                    <h3>{props.ev.name}</h3>
                    <p>Sport: {props.ev.sport}</p>
                    <p>Location: {props.ev.location}</p>
                    <p>Date: {props.ev.date}</p>
                    <p>Starts: {props.ev.startTime}</p>
                    <p>Ends: {props.ev.endTime}</p>
                    <p>{props.ev.currentPlayers} out of {props.ev.maxPlayers}</p>
                    <p>Host: {hostName}</p>
    
    
                    <Button className="secondary-button" onClick={eventSignUp}>Sign up</Button>{' '}
                </div>
            </Col>
        )
    }
}

export default EventItem;