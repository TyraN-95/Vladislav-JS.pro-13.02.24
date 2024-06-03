import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const User = ({ user }) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <Link to={`/albums/${user.id}`}>View Albums</Link>
    </div>
  );
};

export default User;
