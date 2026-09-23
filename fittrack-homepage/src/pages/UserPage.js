import React from 'react';
import { useParams } from 'react-router-dom';

export default function UserPage() {
  const { id } = useParams();
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
      <h1>Hello, User {id}</h1>
      <p>This is your FitTrack profile page.</p>
    </div>
  );
}