import React, {useState} from 'react'

const CLOUD_URL = "https://api.cloudinary.com/v1_1/dc7cdwbh0/image/upload"

const ImgUpload = (props) => {
   
 const [avUrl, setAvUrl] = useState('./components/Assets/usericon')



    const handleSubmit = async (e) => {
        e.preventDefault()

    const response = await fetch('http://localhost:3000/user/cloudsign', {
        method: 'GET',
        headers: {
            'Authorization': props.token
        }
    })

    const { sig, ts } = await response.json()

    const file = document.getElementById('file-input').files[0]
    const formData = new FormData()

    formData.append('file', file)
    formData.append('upload_preset', 'cloudinary-mayhem')
    formData.append('api_key', '513851381862193')
    formData.append('signature', sig)
    formData.append('timestamp', ts)

    const results = await (await fetch(CLOUD_URL, {
        method: "POST",
        body: formData
    })).json()

    console.log(results)

    setAvUrl(results.img)

    }
    return (
        <div>
            <form encType="multipart/form-data" onSubmit={handleSubmit}>
                <input id="file-input" type="file" />
                <button>Upload Image!</button>
            </form>
            <img src = {avUrl} alt ="avatar" />
        </div>
    )
}

export default ImgUpload;