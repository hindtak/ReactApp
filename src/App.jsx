// App.js
import React, { useState } from 'react';
import LoginForm from './Login'; // Assuming you have created the LoginForm component
import SignUpForm from './Signin'; // Assuming you have created the SignUpForm component

const App = () => {
  // State to track whether a user is logged in or not
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle login
  const handleLogin = (email, password) => {
    // Simulate authentication (replace with your actual authentication logic)
    if (email === 'test@example.com' && password === 'password') {
      setIsLoggedIn(true);
      console.log('Login successful!');
    } else {
      console.log('Login failed!');
    }
  };

  // Function to handle sign up
  const handleSignUp = (username, email, password) => {
    // Simulate sign up (replace with your actual sign-up logic)
    setIsLoggedIn(true);
    console.log('Sign up successful!');
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    console.log('Logout successful!');
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <>
          <LoginForm onLogin={handleLogin} />
          <SignUpForm onSignUp={handleSignUp} />
        </>
      ) : (
        <div>
          <h1>Welcome, Hind!</h1>
          {/* Render authenticated content here */}
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default App;