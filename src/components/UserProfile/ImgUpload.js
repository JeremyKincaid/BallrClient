import React, {useState} from 'react'
import './ImgUpload.css';
import apiurl from '../../environment'; 

const CLOUD_URL = "https://api.cloudinary.com/v1_1/dc7cdwbh0/image/upload"

const ImgUpload = (props) => {
   
 const [avUrl, setAvUrl] = useState("https://res.cloudinary.com/dc7cdwbh0/image/upload/v1605829363/BallrApp/yysv5rrbggtxxkdoa558.png")



    const handleSubmit = async (e) => {
        e.preventDefault()

    const response = await fetch(`${apiurl}/user/cloudsign`, {
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

    const results = await (await fetch(CLOUD_URL, {
        method: "POST",
        body: formData
    })).json()

    console.log(results)

    setAvUrl(results.secure_url)

    const final = await (await fetch(`${apiurl}/user/imageset`, {
        method: 'PUT',
        headers:{
        'Authorization': props.sessionToken,
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: results.secure_url})
    })).json()

    console.log(final);

    }
    return (
        <div>
            <form encType="multipart/form-data" onSubmit={handleSubmit}>
                <input id="file-input" type="file" />
                <button className= 'loadButton' >Upload!</button>
            </form>
            <img src = {avUrl} alt ="avatar" />
        </div>
    )
}

export default ImgUpload;