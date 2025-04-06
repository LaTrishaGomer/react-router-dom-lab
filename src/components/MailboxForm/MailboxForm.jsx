import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MailboxForm(props) {
  const [boxOwner, setBoxOwner] = useState('');
  const [boxSize, setBoxSize] = useState('Small');
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const newMailbox = {
      boxOwner: boxOwner,
      boxSize: boxSize
    };

    props.addBox(newMailbox);
    navigate('/mailboxes');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>New Mailbox</h1>

      <label>Enter a Box Owner:</label>
      <input 
        type="text" 
        value={boxOwner} 
        onChange={(event) => setBoxOwner(event.target.value)} 
        required 
      />

      <label>Select a Box Size:</label>
      <select 
        value={boxSize} 
        onChange={(event) => setBoxSize(event.target.value)}
      >
        <option>Small</option>
        <option>Medium</option>
        <option>Large</option>
      </select>

      <button>Submit</button>
    </form>
  );
}

export default MailboxForm;

