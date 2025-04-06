import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxList from './components/MailboxList/MailboxList';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';

function App() {
  const [mailboxes, setMailboxes] = useState([]);

  function addBox(newBoxData) {
    const newBox = {
      _id: mailboxes.length + 1,     
      boxOwner: newBoxData.boxOwner, 
      boxSize: newBoxData.boxSize,   
    };
  
    setMailboxes([...mailboxes, newBox]);
  }
  

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
      </Routes>
    </div>
  );
}

export default App;
