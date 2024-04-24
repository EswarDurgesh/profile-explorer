import React from 'react';

const ProfileCard = ({ profile, onSummaryClick }) => {
  const { name, photo, description } = profile;

  return (
    <div className="profile-card">
    <img src={photo} alt={name} onError={(e) => e.target.src = 'fallback-image-url.jpg'} />
    <h2>{name}</h2>
      <p>{description}</p>
      <button onClick={onSummaryClick}>Summary</button>
    </div>
  );
}

export default ProfileCard;
