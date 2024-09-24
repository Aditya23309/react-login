// src/components/Account.jsx
import React, { useState } from 'react';

const Account = ({ user, onLogout }) => {
  const [email, setEmail] = useState(user.email);
  const [number, setNumber] = useState(user.Number);

  const handleUpdate = (e) => {
    e.preventDefault();
    alert(`Updated email: ${email}`); 
    console.log('Updated email:', email);
  };

  return (
    <div>
      <h2>Account Information</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
         <input
          type="Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder='Enter New number'
        />
        <br></br>
        <button type="submit">Update</button>
      </form>
      <br></br>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Account;
