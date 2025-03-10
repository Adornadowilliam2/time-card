import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Get navigate function

  // Handle email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Simulate sending password reset email
  const handleSubmit = () => {
    // Basic validation for email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email || !emailRegex.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setLoading(true); // Set loading state to true while submitting

    // Simulate an API call
    setTimeout(() => {
      setLoading(false);
      toast.success('Password reset instructions have been sent to your email.');
      setEmail(''); // Clear the input field after success
    }, 2000); // Simulate a delay (e.g., API call)
  };

  // Navigate to login page when clicking on X
  const handleClose = () => {
    navigate('/login'); // Navigate to /login
  };

  return (
    <div style={styles.container}>
      <div style={styles.headerContainer}>
        <h1 style={styles.header}>Forgot Password</h1>
        <button
          onClick={handleClose}
          style={styles.closeButton}
          aria-label="Close"
        >
          &times; {/* This is the "X" icon */}
        </button>
      </div>

      <div style={styles.formContainer}>
        <label htmlFor="email" style={styles.label}>Enter your email address</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          style={styles.input}
        />

        <button
          onClick={handleSubmit}
          style={styles.button}
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Password Reset Link'}
        </button>
      </div>

      <ToastContainer />
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '400px',
    margin: '0 auto',
    backgroundColor: '#f4f7f6',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
  },
  closeButton: {
    fontSize: '24px',
    background: 'transparent',
    border: 'none',
    color: '#333',
    cursor: 'pointer',
    transition: 'color 0.3s',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  label: {
    fontSize: '16px',
    color: '#555',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    outline: 'none',
    width: '100%',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    width: '100%',
  },
};
    