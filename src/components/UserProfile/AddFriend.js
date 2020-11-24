import React,{useState,useEffect} from 'react'
import './AddFriend.css';
import{ Button } from 'reactstrap';

const AddFriend = (props) => {
const [addFriend, setAddFriend] = useState('');

useEffect(() => {
    fetchAddFriend()
}, 
)

const fetchAddFriend = () => {
    fetch('http://localhost:3000/user/search/displayname', {
        method: 'GET',
        headers: {
            'Authorization': props.sessionToken
        }
    }).then(r => r.json())
    .then(rArr => setAddFriend(rArr))

}
    return (
        <div>
            <form>
                <Button id="Button">Add Me</Button>{' '}
            </form>
        </div>
    )
}

export default AddFriend;

