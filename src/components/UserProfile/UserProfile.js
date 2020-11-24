import React, { useState, useEffect } from 'react';
import './UserProfile.css';

import { Row, Col, Container, Button, Modal } from 'reactstrap';
import UserEdit from './UserEdit';
import ImgUpload from './ImgUpload';
import AddFriend from './AddFriend';


// User Profile need displayname of users?

const UserProfile = (props) => {

  const [user, setUser] = useState('');
  const [modal, setModal] = useState(false);

  useEffect(
    () => {
        fetchUser()
    }, []
  )

  const toggle = () => {
    setModal(!modal);
  }

  const fetchUser = () => {
    fetch(`http://localhost:3000/user/${props.currentUser}`, {
      method: 'GET'
    }).then(r => r.json())
      .then(rObj => setUser(rObj.user))
      .catch(err => console.log(err))
    }

  return (
    <Container className="profileContainer" fluid={true}>
      <Row>
        <Col>
          <img className="profilePic" src = {user.profilepic ? user.profilepic : "https://res.cloudinary.com/dc7cdwbh0/image/upload/v1605829363/BallrApp/yysv5rrbggtxxkdoa558.png"} alt ="avatar" />

        </Col>  
        <Col>
        <h2>{ user.displayname }</h2>
        <p>{ user.description }</p>
        </Col>

          {/* <ImgUpload sessionToken={props.sessionToken} /> */}
        <Col>
        <Button className="editButton" onClick={toggle}>Edit Profile</Button>

        </Col>
        {/* <AddFriend /> */}
      </Row>
      <Modal isOpen={modal} className="createModal">
          <UserEdit sessionToken = {props.sessionToken} user={user} toggle={toggle} />
      </Modal>

    </Container>
  )
}

export default UserProfile;
