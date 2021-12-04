import React from 'react'
import './Profile.css'
import Face from '../Assets/face.jpg'

function Profile() {

    return (
        <div className='profile-outer'>
            <div className='profile-inner'>
                <div className='profile-image'>
                    <img src={Face} className='profile-dp'/>
                </div>
                <div className='profile-details'>
                    <div className='profile-edit'>
                        <button>Edit Details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
