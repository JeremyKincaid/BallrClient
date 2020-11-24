import React, { useState, useEffect } from 'react';
import './UserProfile.css';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import ImgUpload from './ImgUpload';


// User Profile need displayname of users?

const UserProfile = (props) => {


  const [displayName, setDisplayName] = useState('')
  const [rating, setRating] = useState('')
  const [description, setDescription] = useState('')

  useEffect(
    () => {
      fetchUserProfile()
    }, []
  )
  let LID = localStorage.getItem('userID')
  const fetchUserProfile = async () => {
    let res = await fetch(`http://localhost:3000/user/${LID}`)
    let json = await res.json()
    console.log(json)
    setDisplayName(json.user.displayname)

    setRating(json.user.rating)

    setDescription(json.user.description)
  }

return (
  <div className="userProfile">
    <Card>
      <CardBody>
        <CardTitle tag="h3">BALLR</CardTitle>
        <CardSubtitle tag="h5" className="mb-2 text-muted">{`DisplayName:${displayName}`}</CardSubtitle>
        <ImgUpload sessionToken={props.sessionToken} />
        <br />
        <CardText>{`Here's a little about myself: ${description}`}</CardText>
        <p>{`Rating: ${rating}`}</p>
        
      </CardBody>
    </Card>

  </div>
) 
        }


export default UserProfile;
