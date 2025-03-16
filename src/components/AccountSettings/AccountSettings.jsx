import './AccountSettings.css';
import ProfileImg from "../../assets/Profile-Picture.png"
import ImageUpload from '../imageUpload/ImageUpload';
import { useContext, useEffect, useState } from 'react';
import AppContext from '../../context/AppContext';
import axiosInstance from '../../utils/axiosInstance';


const AccountSettings = () => {
    const {currentUser, updateUser} = useContext(AppContext);
    
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [publicId, setPublicId] = useState(currentUser && currentUser.public_id);
  const [imageUrl, setImageUrl] = useState();



   // Update local state when props change
      useEffect(() => {
          if (currentUser) {
            setName(currentUser.name || "");
            setUsername(currentUser.username || "");
            setEmail(currentUser.email || "");
            setState(currentUser.state || "");
            setCity(currentUser.city || "");
          }
      }, [currentUser]);


 

    
    // Cloudinary configuration from env variables
    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            name,
            username,
            email,
            state,
            city
        };

        try {
            const response = await axiosInstance.put(`/users/update`, formData);

            console.log("Article updated successfully:", response.data);
            updateUser(response.data);
            alert("Article updated successfully!");

        } catch (error) {
            console.error("Error updating article:", error.response?.data || error);
            alert(error.response?.data?.message || "Failed to update article.");
        }
    };



    const handleUpdateImage = async () => {


       const formData = {
            imageUrl,
            publicId
        }

        console.log("imageUrl", imageUrl)
        console.log("publicId", publicId)
        
        try {
            const response = await axiosInstance.put(`/users/update`, formData);

            console.log("User image updated successfully:", response.data);
        
            updateUser(response.data)
            alert("User Image updated successfully!");


        } catch (error) {
            console.error("Error updating photo:", error.response?.data || error);
            alert(error.response?.data?.message || "Failed to update photo.");
        }
    }


    return (
        <section className='account-settings-wrapper'>

            <div className="profile-image-wrapper">
                <div className="profile-image">
                <div className='profile-update' style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "5px"
                }}>
                 {!publicId &&   <img src={imageUrl ? imageUrl : ProfileImg} alt="user-profile-image" /> }
                    <ImageUpload
                        cloudName={cloudName}
                        uploadPreset={uploadPreset}
                        publicId={publicId}
                        setPublicId={setPublicId}
                        setImageUrl={setImageUrl}
                    />
                </div>
                    
                    <div className='profile-image-description'>
                        <p className="upload-image">Upload a New Photo</p>
                        <p className='image-title'>{imageUrl}</p>
                    </div>
                    
           
                </div>

                <div className="profile-update-button">
                    <button className='update_button' onClick={handleUpdateImage}>Update Image</button>
                </div>
            </div>

            <div className="profile-details">
                <h2>Change User information here</h2>

                <div className="form-wrapper">
                    <form onSubmit={handleSubmit}>
                        <div className="name-email">
                            <div className="name-input-container">
                                <label htmlFor="name">Full Name</label>
                                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="username-input-container">
                                <label htmlFor="username">Username</label>
                                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                            </div>
                        </div>
                        <div className="email-input-container">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="city-state">
                            <div className="city-input-container">
                                <label htmlFor="city">City</label>
                                <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} />
                            </div>
                            <div className="state-input-container">
                                <label htmlFor="state">State</label>
                                <input type="text" id="state" value={state} onChange={(e) => setState(e.target.value)} />
                            </div>
                        </div>
                        <div className="button">
                            <button className="update">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default AccountSettings