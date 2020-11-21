import React, { useState,useEffect} from 'react';
import './UserProfile.css';
import{
  Card, CardText, CardBody,
  CardTitle, CardSubtitle
  } from 'reactstrap';
import ImgUpload from './ImgUpload';
import AddFriend from './AddFriend';

// User Profile need displayname of users?

const UserProfile = (props) => {
    const [userProfile, setUserProfile] = useState('');
 
    useEffect(() => {
      fetchUserProfile()
    }, 
    )

    const fetchUserProfile = () => {
    fetch('http://localhost:3000/user/id', {
      method: 'GET'
    }). then ( r=> r.json())
    .then(rArr => setUserProfile(rArr))
}

        return (
            <div>
      
      <Card>
        <CardBody>
          <CardTitle tag="h3">BALLR</CardTitle>
          <CardSubtitle tag="h5" className="mb-2 text-muted">DisplayName{userProfile}</CardSubtitle>
          <ImgUpload sessionToken={props.sessionToken} />
        <br/>
          <CardText>"Profile Description"Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
     
          <AddFriend/>
        </CardBody>
      </Card>
            </div>
        ) 
  }

export default UserProfile;
