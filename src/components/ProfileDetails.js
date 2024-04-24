import React from 'react';

const ProfileDetails = ({ profile }) => {
  const { name, photo, description, address } = profile;

  return (
    <div className="profile-details">
      <img src={photo} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{address}</p>
    </div>
  );
}

export default ProfileDetails;
