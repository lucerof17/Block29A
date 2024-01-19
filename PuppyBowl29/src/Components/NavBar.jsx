// NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const playerIds = [1, 2, 3]; // Example player IDs

  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        {playerIds.map((id) => (
          <li key={id}>
            <Link to={`/players/${id}`}>Player {id}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;

