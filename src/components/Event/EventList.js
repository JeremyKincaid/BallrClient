import React from 'react';
import EventItem from './EventItem'

const EventList = (props) => {

    return(
        <div>
            {props.events.map((evObj, i) => <EventItem ev={evObj} key={i} currentUser={props.currentUser}/>)}
        </div>
    )
}

export default EventList;