import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UsersList from './Components/UsersList';
import AlbumsList from './Components/AlbumsList';
import PhotosList from './Components/PhotosList';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Список пользователей</h1>
        <Routes>
          <Route path="/" element={<UsersList />} />
          <Route path="/albums/:userId" element={<AlbumsList />} />
          <Route path="/photos/:albumId" element={<PhotosList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
