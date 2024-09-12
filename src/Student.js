import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import logo from './logo.jpg'; // Import the logo image

function Student() {
  const [availableDocs, setAvailableDocs] = useState([]);
  const [file, setFile] = useState(null);
  const [uploadMessage, setUploadMessage] = useState('');

  useEffect(() => {
    const fetchApprovedDocs = () => {
      const storedApprovedDocs = JSON.parse(localStorage.getItem('approvedDocs')) || [];
      setAvailableDocs(storedApprovedDocs);
    };

    fetchApprovedDocs();
  }, []);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) {
      setUploadMessage('Please select a file to upload.');
      return;
    }

    const fileName = file.name;
    const pendingDocs = JSON.parse(localStorage.getItem('pendingDocs')) || [];
    const updatedPendingDocs = [...pendingDocs, { name: fileName }];
    localStorage.setItem('pendingDocs', JSON.stringify(updatedPendingDocs));

    setFile(null);
    setUploadMessage(`File ${fileName} uploaded successfully!`);
  };

  return (
    <div className="App">
      <header className="student-header">
        <img src={logo} alt="Logo" className="student-logo" />
        <input type="text" className="student-search-bar" placeholder="Search..." />
        <div className="student-nav-wrapper">
          <a href="#docs-available">Docs Available</a>
          <a href="#upload-doc">Upload Document</a>
          <Link to="/">
            <button className="student-logout-button">Logout</button>
          </Link>
        </div>
      </header>
      <main className="student-main">
        <div className="student-box left-box">
          <h2>Upload Document</h2>
          <input type="file" accept=".pdf" onChange={handleFileChange} />
          <button className="upload-button" onClick={handleUpload}>Upload</button>
          {uploadMessage && <p>{uploadMessage}</p>}
        </div>
        <div className="student-box right-box">
          <h2>Documents Available</h2>
          <ul>
            {availableDocs.length > 0 ? (
              availableDocs.map((docName, index) => (
                <li key={index}>{docName}</li>
              ))
            ) : (
              <p>No documents available.</p>
            )}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default Student;
