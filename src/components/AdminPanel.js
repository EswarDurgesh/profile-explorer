import React, { useState } from 'react';

const AdminPanel = ({ profiles, onAddProfile, onDeleteProfile }) => {
  const [newProfile, setNewProfile] = useState({ name: '', photo: '', description: '', address: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProfile(prevProfile => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const handleAddProfile = () => {
    onAddProfile(newProfile);
    setNewProfile({ name: '', photo: '', description: '', address: '' });
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      <div>
  <input type="text" name="name" placeholder="Name" value={newProfile.name} onChange={handleChange} />
  <input type="text" name="photo" placeholder="Photo URL" value={newProfile.photo} onChange={handleChange} />
  <input type="text" name="description" placeholder="Description" value={newProfile.description} onChange={handleChange} />
  <input type="text" name="address" placeholder="Address" value={newProfile.address} onChange={handleChange} />
  <input type="text" name="latitude" placeholder="Latitude" value={newProfile.latitude} onChange={handleChange} />
  <input type="text" name="longitude" placeholder="Longitude" value={newProfile.longitude} onChange={handleChange} />
  <button onClick={handleAddProfile}>Add Profile</button>
</div>

      <ul>
        {profiles.map((profile, index) => (
          <li key={index}>
            {profile.name} - <button onClick={() => onDeleteProfile(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPanel;
