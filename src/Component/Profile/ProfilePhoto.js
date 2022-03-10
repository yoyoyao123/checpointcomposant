import React from 'react';
import myImage from '../../img/profile.jpg';

const ProfilePhoto = () => {

    return (
        <div>
            <img src={myImage} alt='myimage' />
        </div>
    )
}

export default ProfilePhoto;