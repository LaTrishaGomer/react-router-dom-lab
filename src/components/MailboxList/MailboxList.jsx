import React from 'react';
import { Link } from 'react-router-dom';

function MailboxList({ mailboxes }) {
  return (
    <div>
      <h2>Mailboxes</h2>
      <div>
        {mailboxes.map((mailbox) => (
          <Link key={mailbox._id} to={`/mailboxes/${mailbox._id}`}>
            <div className="mail-box">
              <p>Box #{mailbox._id}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MailboxList;
