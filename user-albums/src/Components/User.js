import React, { useState } from 'react';
import AlbumsList from './AlbumsList';

const User = ({ user }) => {
  const [showAlbums, setShowAlbums] = useState(false);

  return (
    <div>
      <h2>{user.name}</h2>
      <button onClick={() => setShowAlbums(!showAlbums)}>
        {showAlbums ? 'Hide Albums' : 'Show Albums'}
      </button>
      {showAlbums && <AlbumsList userId={user.id} />}
    </div>
  );
};

export default User;
