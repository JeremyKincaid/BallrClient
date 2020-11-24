import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, ModalHeader, ModalBody, ModalFooter, InputGroupAddon, InputGroup } from 'reactstrap';

const CLOUD_URL = "https://api.cloudinary.com/v1_1/dc7cdwbh0/image/upload"

const UserEdit = (props) => {

    const [displayName, setDisplayName] = useState(props.user.displayname);
    const [description, setDescription] = useState(props.user.description);
    const [profilePic, setProfilePic] = useState(props.user.profilepic);

    const resetForm = () => {
        setDisplayName('');
        setDescription('');
        setProfilePic('');
        props.toggle();
    }

    const uploadPic = async (e) => {
        e.preventDefault()

        const response = await fetch('http://localhost:3000/user/cloudsign', {
            method: 'GET',
            headers: {
                'Authorization': props.sessionToken
            }
        })

        const { sig, ts } = await response.json()

        console.log(ts);

        const file = document.getElementById('file-input').files[0]
        const formData = new FormData()

        formData.append('file', file)
        formData.append('upload_preset', 'uuhz0rq7')
        formData.append('api_key', '513851381862193')
        formData.append('signature', sig)
        formData.append('timestamp', ts)

        console.log(formData.entries);
        console.log(formData.values)

        const results = await (await fetch(CLOUD_URL, {
            method: "POST",
            body: formData
        })).json()

        console.log(results)

        setProfilePic(results.secure_url)

        const final = await (await fetch('http://localhost:3000/user/imageset', {
            method: 'PUT',
            headers:{
            'Authorization': props.sessionToken,
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url: results.secure_url})
        })).json()

        console.log(final);

    }


    const handleSubmit = (e) => {
        e.preventDefault()
        const body = {
            name: displayName,
            description: description,
            location: profilePic,
        }

        fetch(`http://localhost:3000/user/edit/${props.user.id}`, {
            method: 'PUT',

            headers: {
                'Content-Type': 'application/json',
                //'Authorization': props.sessionToken
            },
            body: JSON.stringify(body)
        }).then(r => r.json())
          .then(rObj => {
              console.log(rObj);
              resetForm();
              props.toggle();
          }) 
    }   

    return(
        <div>
            <ModalHeader className="modalHeader"><h1>Edit Profile</h1></ModalHeader>
            <Form encType="multipart/form-data" className="profileForm">
                <ModalBody className="modalBody">
                    <FormGroup>
                        <Label htmlFor="displayName">Name</Label>
                        <Input id="displayName" value={displayName} onChange={e => setDisplayName(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="description">Description</Label>
                        <Input id="description" value={description} onChange={e => setDescription(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="file-input">Profile Pic</Label>
                        <InputGroup>
                            <Input id="file-input" type="file" />
                            <InputGroupAddon addonType="append">
                                <Button className='loadButton' onClick={uploadPic} >Upload Pic!</Button>
                            </InputGroupAddon>
                        </InputGroup>
                        <img src = {profilePic ? profilePic : "https://res.cloudinary.com/dc7cdwbh0/image/upload/v1605829363/BallrApp/yysv5rrbggtxxkdoa558.png"} alt ="avatar" />
                    </FormGroup>
                </ModalBody>
                <ModalFooter className="modalFooter">
                    <Button className="cancelBtn" onClick={resetForm} type="button">Cancel</Button>
                    <Button className="submitProfileBtn" onClick={handleSubmit}>Done</Button>
                </ModalFooter>
            </Form>
        </div>
    )
}

export default UserEdit