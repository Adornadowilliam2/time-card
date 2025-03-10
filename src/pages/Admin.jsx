import React, { useState } from 'react';

export default function Admin() {
  // Fake data simulating a database
  const fakeData = [
    {
      id: 1,
      employeeId: '0001565834',
      name: 'William Adornado',
      timeIn: '2025-01-01 08:00:00',
      timeOut: '2025-01-01 17:00:00',
    },
    {
      id: 2,
      employeeId: '0001565835',
      name: 'John Doe',
      timeIn: '2025-01-02 09:00:00',
      timeOut: '2025-01-02 18:00:00',
    },
    {
      id: 3,
      employeeId: '0001565836',
      name: 'Jane Smith',
      timeIn: '2025-01-03 08:30:00',
      timeOut: '2025-01-03 17:30:00',
    },
    // Add more fake data entries for January 2025
  ];

  const [logs, setLogs] = useState(fakeData); // State to manage the logs

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Admin - Time In/Out Logs (January 2025)</h1>

      {/* Table to display the fake database logs */}
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>Employee ID</th>
            <th style={styles.tableHeader}>Name</th>
            <th style={styles.tableHeader}>Time In</th>
            <th style={styles.tableHeader}>Time Out</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <tr key={log.id}>
              <td style={styles.tableCell}>{log.employeeId}</td>
              <td style={styles.tableCell}>{log.name}</td>
              <td style={styles.tableCell}>{log.timeIn}</td>
              <td style={styles.tableCell}>{log.timeOut}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add new log manually */}
      <div style={styles.addLogContainer}>
        <h3>Add New Time Log Manually</h3>
        <div style={styles.inputGroup}>
          <input
            type="text"
            placeholder="Employee ID"
            style={styles.input}
          />
          <input
            type="text"
            placeholder="Name"
            style={styles.input}
          />
          <input
            type="datetime-local"
            style={styles.input}
          />
          <input
            type="datetime-local"
            style={styles.input}
          />
          <button style={styles.addButton}>Add Log</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '1000px',
    margin: 'auto',
  },
  header: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '20px',
  },
  tableHeader: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '12px',
    textAlign: 'left',
  },
  tableCell: {
    padding: '12px',
    borderBottom: '1px solid #ddd',
  },
  addLogContainer: {
    marginTop: '20px',
    padding: '20px',
    backgroundColor: '#f4f7f6',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    outline: 'none',
  },
  addButton: {
    padding: '10px',
    backgroundColor: '#28a745',
    color: 'white',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};
