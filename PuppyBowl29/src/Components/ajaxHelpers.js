export const fetchPlayers = async () => {
    try {
      const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/players');
      if (!response.ok) {
        throw new Error('Failed to fetch players');
      }
      const players = await response.json();
      return players;
    } catch (error) {
      console.error('Error fetching players:', error);
      throw error;
    }
  };
  

  export const fetchPlayer = async (id) => {
    
  };