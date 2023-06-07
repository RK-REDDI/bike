import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../PageComponents/Header';

const Error = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { message } = location.state || {};

  return (
    <div>
      <Header />
      <h3>Error</h3>
      {message && <p>{message}</p>}
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default Error;