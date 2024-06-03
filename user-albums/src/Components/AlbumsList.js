import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PhotosList from './PhotosList';

const AlbumsList = () => {
  const { userId } = useParams();
  const [albums, setAlbums] = useState([]);
  const [showPhotos, setShowPhotos] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then(response => response.json())
      .then(data => setAlbums(data));
  }, [userId]);

  const toggleShowPhotos = (albumId) => {
    setShowPhotos(prevState => ({
      ...prevState,
      [albumId]: !prevState[albumId],
    }));
  };

  return (
    <div>
      {albums.map(album => (
        <div key={album.id}>
          <h3>{album.title}</h3>
          <button onClick={() => toggleShowPhotos(album.id)}>
            {showPhotos[album.id] ? 'Hide Photos' : 'Show Photos'}
          </button>
          <Link to={`/photos/${album.id}`}>View Photos</Link>
          {showPhotos[album.id] && <PhotosList albumId={album.id} />}
        </div>
      ))}
    </div>
  );
};

export default AlbumsList;
