import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import logo from './logo.jpg'; // Import the logo image

function Admin() {
  const [pendingDocs, setPendingDocs] = useState([]);
  const [approvedDocs, setApprovedDocs] = useState([]);

  // Simulate fetching documents from a server
  useEffect(() => {
    // Example: Simulate fetching uploaded documents from local storage
    const storedPendingDocs = JSON.parse(localStorage.getItem('pendingDocs')) || [];
    setPendingDocs(storedPendingDocs);
  }, []);

  const approveDocument = (docName) => {
    setApprovedDocs([...approvedDocs, docName]);
    setPendingDocs(pendingDocs.filter(doc => doc.name !== docName));

    // Update local storage
    localStorage.setItem('approvedDocs', JSON.stringify([...approvedDocs, docName]));
    localStorage.setItem('pendingDocs', JSON.stringify(pendingDocs.filter(doc => doc.name !== docName)));
  };

  return (
    <div className="App">
      <header className="dashboard-header">
        <img src={logo} alt="Logo" className="logo" />
        <input type="text" className="search-bar" placeholder="Search..." />
        <div className="nav-wrapper">
          <a href="#approved-docs">Approved Docs</a>
          <a href="#pending-docs">Pending Docs</a>
          <Link to="/">
            <button className="logout-button">Logout</button>
          </Link>
        </div>
      </header>
      <main className="admin-main">
        <section id="pending-docs" className="admin-box left-box">
          <h2>Pending Documents</h2>
          <ul>
            {pendingDocs.length > 0 ? (
              pendingDocs.map((doc, index) => (
                <li key={index}>
                  {doc.name}
                  <button onClick={() => approveDocument(doc.name)} className="approve-button">
                    Approve
                  </button>
                </li>
              ))
            ) : (
              <p>No pending documents.</p>
            )}
          </ul>
        </section>
        <section id="approved-docs" className="admin-box right-box">
          <h2>Approved Documents</h2>
          <ul>
            {approvedDocs.length > 0 ? (
              approvedDocs.map((docName, index) => (
                <li key={index}>{docName}</li>
              ))
            ) : (
              <p>No approved documents yet.</p>
            )}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Admin;
