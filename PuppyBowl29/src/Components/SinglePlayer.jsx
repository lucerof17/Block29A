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
        console.error(`Error fetching player with ID ${id}:`, error);
      }
    };

    fetchSinglePlayer();
  }, [id]);

  return (
    <div>
      <h2>The SinglePlayer component</h2>
      {player ? (
        <div>
          <h4>{player.name}</h4>
          {}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default SinglePlayer;

