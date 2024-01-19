// SinglePlayer.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPlayer } from "../Components/ajaxHelpers"; // Create a new ajaxHelper function to fetch a single player

function SinglePlayer() {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const fetchSinglePlayer = async () => {
      try {
        const fetchedPlayer = await fetchPlayer(id);
        setPlayer(fetchedPlayer);
      } catch (error) {
        // Handle error as needed
        console.error(`Error fetching player with ID ${id}:`, error);
      }
    };

    fetchSinglePlayer();
  }, [id]); // Dependency on id to re-fetch when the id changes

  return (
    <div>
      <h2>The SinglePlayer component</h2>
      {player ? (
        <div>
          <h4>{player.name}</h4>
          {/* Display other player details */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default SinglePlayer;

