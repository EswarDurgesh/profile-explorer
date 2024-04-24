import React, { useState } from 'react';
import './App.css'
import ProfileCard from './components/ProfileCard';
import Map from './components/Map';
import AdminPanel from './components/AdminPanel';
import ProfileDetails from './components/ProfileDetails';
import LoadingIndicator from './components/LoadingIndicator';
import ProfileModal from './components/ProfileModal'; // Import ProfileModal component

const App = () => {
  // State variables
  const [profiles, setProfiles] = useState([]); // Your profiles state
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  // Sample data for demonstration
  useState(() => {
    setProfiles([
      {
        name: 'John Doe',
        photo: 'https://via.placeholder.com/150',
        description: 'Software Engineer .',
        address: 'New York, USA',
      },
      {
        name: 'Jane Smith',
        photo: 'https://via.placeholder.com/150',
        description: 'Marketing Manager .',
        address: 'London, UK',
      }
    ]);
  });

  // Event handlers
  const handleSummaryClick = (profile) => {
    setSelectedProfile(profile);
    setShowModal(true); // Show the modal
  };

  const handleCloseModal = () => {
    setSelectedProfile(null);
    setShowModal(false); // Hide the modal
  };

  const handleAddProfile = (newProfile) => {
    setProfiles([...profiles, newProfile]);
  };

  const handleDeleteProfile = (index) => {
    const updatedProfiles = [...profiles];
    updatedProfiles.splice(index, 1);
    setProfiles(updatedProfiles);
  };

  // Render method
  return (
    <div className="app">
      <h1>Profile Explorer</h1>
      <div className="profiles">
        {profiles.map((profile, index) => (
          <div className="profile" key={index}>
            <ProfileCard profile={profile} onSummaryClick={() => handleSummaryClick(profile)} />
          </div>
        ))}
      </div>
      <div className="map-section">
        {loading && <LoadingIndicator />}
        {selectedProfile && <Map address={selectedProfile.address} />}
      </div>
      <AdminPanel profiles={profiles} onAddProfile={handleAddProfile} onDeleteProfile={handleDeleteProfile} />
      {showModal && <ProfileModal profile={selectedProfile} onClose={handleCloseModal} />}
    </div>
  );
}

export default App;
