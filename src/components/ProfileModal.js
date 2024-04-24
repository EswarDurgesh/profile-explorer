// ProfileModal.js
import React from 'react';

const ProfileModal = ({ profile, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
      <button className="close-button" onClick={onClose}>
      <span style={{ fontSize: '35px', fontWeight: 'bold' }}>X</span>
    </button>
            <h2>{profile.name}</h2>
        <img className='img1' src={profile.photo} alt={profile.name} />
        <p style={{justifyContent:'center'}} >{profile.description}</p>
        <p style={{justifyContent:'center'}} >Address: {profile.address}</p>
        {/* Add more profile details here */}
      </div>
    </div>
  );
}

export default ProfileModal;
