import React, { useState, useEffect } from 'react';
import { timeIn, timeOut } from '../api/timelog';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Admin() {
  const [employeeId, setEmployeeId] = useState('');
  const [lastScanTime, setLastScanTime] = useState(null); // Store the last scan time
  const [scanCount, setScanCount] = useState(0); // Track if it's the first or second scan for time-in/out

  // Handle RFID scan input (simulated via onChange for simplicity)
  const handleRfidScan = (e) => {
    setEmployeeId(e.target.value); // Store the employeeId
  };

  useEffect(() => {
    // If employeeId is scanned, handle time-in or time-out
    if (employeeId) {
      if (scanCount === 0) {
        // First scan - Time In
        timeIn(employeeId)
          .then(() => {
            toast.success('Successfully clocked in!');
            setLastScanTime(new Date());
            setScanCount(1); // Move to the second scan stage
            setEmployeeId(''); // Clear the input field after successful time-in
          })
          .catch(() => {
            toast.error('Error while clocking in. Please try again.');
          });
      } else if (scanCount === 1) {
        // Second scan - Check if more than 3 minutes have passed for Time Out
        const currentTime = new Date();
        const timeDiff = (currentTime - new Date(lastScanTime)) / 1000 / 60; // Time difference in minutes

        if (timeDiff >= 3) {
          // If more than 3 minutes passed, it's time-out
          timeOut(employeeId)
            .then(() => {
              toast.success('Successfully clocked out!');
              setScanCount(0); // Reset for next time-in
              setLastScanTime(null); // Reset last scan time
              setEmployeeId(''); // Clear the input field after successful time-out
            })
            .catch(() => {
              toast.error('Error while clocking out. Please try again.');
            });
        } else {
          // If less than 3 minutes, display a message to wait
          toast.info('Please wait at least 3 minutes to clock out.');
        }
      }
    }
  }, [employeeId, scanCount, lastScanTime]); // Effect will trigger when employeeId or scanCount changes

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Employee - Time In/Out</h1>

      <div style={styles.inputContainer}>
        <label htmlFor="employeeId" style={styles.label}>Scan Employee RFID:</label>
        <input
          type="text"
          id="employeeId"
          placeholder="Scan RFID here..."
          value={employeeId}
          onChange={handleRfidScan}
          style={styles.input}
        />
      </div>

      {/* React Toast Container */}
      <ToastContainer />
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '500px',
    margin: '0 auto',
    backgroundColor: '#f4f7f6',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
  },
  label: {
    fontSize: '16px',
    marginBottom: '8px',
    color: '#555',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    outline: 'none',
    marginBottom: '15px',
    width: '100%',
  },
};
