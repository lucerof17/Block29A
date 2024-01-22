// AllPlayers.jsx
import React, { useState, useEffect } from 'react';
import { fetchPlayers } from "../Components/ajaxHelpers";
import { Link, useNavigate } from 'react-router-dom';

function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedPlayers = await fetchPlayers();
        setPlayers(fetchedPlayers);
      } catch (error) {
        // Handle error as needed
        console.error('Error fetching players:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run once on mount

  const handlePlayerClick = playerId => {
    // Use navigate to go to the SinglePlayer component with the player's ID
    navigate(`/players/${playerId}`);
  };

  return (
    <div>
      <h2>The AllPlayers component</h2>
      <div>
        {players.map(player => (
          <div key={player.id}>
            <h4>{player.name}</h4>
            {}
            <button onClick={() => handlePlayerClick(player.id)}>
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllPlayers;

