import React, { useState, useEffect} from 'react';
import './UserProfile.css';
import{
    Card, CardText, CardBody,
    CardTitle, Button, CardImg
  } from 'reactstrap';
import ImgUpload from './ImgUpload';



const UserProfile = (props) => {
    const [userProfile, setUserProfile] = useState('');
    const [description, setDescription] = useState('');
//     useEffect(() => {
//       fetchDisplayName()
//     }, []
//     )

//     const fetchDescription = () => {
//     fetch('http://localhost:3000/user/id', {
//       method: 'GET'
//     }). then ( r=> r.json())
//     .then(rArr => setDescription(rArr))
// }

        return (
            <div>
      <ImgUpload />
                <Card>
                <CardTitle tag="h2">Ballr,</CardTitle>
                
                {/* <CardImg top width="100%" src='' alt="Card image cap" /> */}
        <CardBody>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
            </div>
        )
    
  }

export default UserProfile;
