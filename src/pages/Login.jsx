import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Link to navigate to the register page
import { ToastContainer, toast } from 'react-toastify'; // For showing toast notifications
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle email and password change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Handle form submission (login)
  const handleSubmit = () => {
    if (!email || !password) {
      toast.error('Please fill in both fields');
      return;
    }

    setLoading(true);

    // Simulate an API call
    setTimeout(() => {
      setLoading(false);
      // You can replace this logic with actual login API call
      toast.success('Login successful!');
      setEmail(''); // Clear the email field
      setPassword(''); // Clear the password field
    }, 2000); // Simulate a delay
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Login</h1>

      <div style={styles.formContainer}>
        <label htmlFor="email" style={styles.label}>Email Address</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          style={styles.input}
        />

        <label htmlFor="password" style={styles.label}>Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={handlePasswordChange}
          style={styles.input}
        />

        <button
          onClick={handleSubmit}
          style={styles.button}
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </div>

      <div style={styles.registerLinkContainer}>
        <p style={styles.registerText}>Don't have an account?</p>
        <Link to="/register" style={styles.registerLink}>Register Here</Link>
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
  header: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
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
    width: '90%',
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
  registerLinkContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
    alignItems: 'center',
  },
  registerText: {
    fontSize: '14px',
    color: '#555',
  },
  registerLink: {
    fontSize: '14px',
    color: '#007bff',
    textDecoration: 'none',
    marginLeft: '5px',
  },
};
