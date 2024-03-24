import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx'; // Assuming you have a Home component
import LoginForm from './Login';
import SignUpForm from './Signin';
import NewPostForm from './Newpost';
import NavBar from './NavBar.jsx';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/newpost" element={<NewPostForm  />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
