// NewPlayerForm.jsx
import React, { useState } from 'react';

function NewPlayerForm() {
  const [newPlayerName, setNewPlayerName] = useState('');

  const handleInputChange = (e) => {
    setNewPlayerName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform logic to create a new player with newPlayerName
    console.log(`Creating a new player: ${newPlayerName}`);
    // Add additional logic to send the new player data to the server
  };

  return (
    <div>
      <h2>The NewPlayerForm component</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Player Name:
          <input type="text" value={newPlayerName} onChange={handleInputChange} />
        </label>
        <button type="submit">Create Player</button>
      </form>
    </div>
  );
}

export default NewPlayerForm;

