import './AccountSettings.css';
import ProfileImg from "../../assets/Profile-Picture.png"


const AccountSettings = () => {
    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    }
    return (
        <section className='account-settings-wrapper'>

            <div className="profile-image-wrapper">
                <div className="profile-image">
                    <img src={ProfileImg} alt="user-profile-image" />
                    <div className='profile-image-description'>
                        <p className="upload-image">Upload a New Photo</p>
                        <p className='image-title'>profile-pic.jpg</p>
                    </div>
                </div>

                <div className="profile-update-button">
                    <button>Update</button>
                </div>
            </div>

            <div className="profile-details">
                <h2>Change User information here</h2>

                <div className="form-wrapper">

                    <form onSubmit={handleSubmit}>

                        <div className="name-email">

                            <div className="name-input-container">
                                <label htmlFor="name">Full Name*</label>
                                <input type="text" name="name" id="name" />
                            </div>

                            <div className="email-input-container">
                                <label htmlFor="email">Email Address*</label>
                                <input type="email" name="email" id="email" />
                            </div>
                        </div>

                        <div className="address-input-container">
                            <label htmlFor="address">Email Address*</label>
                            <input type="text" name="address" id="address" />
                        </div>

                        <div className="city-state">

                            <div className="city-input-container">
                                <label htmlFor="city">City</label>
                                <input type="text" name="city" id="city" />
                            </div>

                            <div className="state-input-container">
                                <label htmlFor="state">State</label>
                                <input type="text" name="state" id="state" />
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