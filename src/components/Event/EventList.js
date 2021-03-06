import React from 'react';
import EventItem from './EventItem';
import { Container, Row } from 'reactstrap';

const EventList = (props) => {

    return(
        <Container>
            <Row xs="1" sm="1" md="2" lg="3">
                {props.events.map((evObj, i) => <EventItem ev={evObj} key={i} currentUser={props.currentUser} fetchEvents={props.fetchEvents} />)}
            </Row>
        </Container>
    )
}

export default EventList;