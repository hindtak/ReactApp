import React, { useState } from "react";
//login form compt
 export const LoginForm =({ onsubmit}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handelSubmit = (e) => {
        e.preventDefault();
       onsubmit({ email, password });
    };
    return (
        <form onSubmit={handelSubmit}>
            <label>
                Email:
                <input type="email" value={email} oncChange={(e) => setEmail(e.target.value)}/>
            </label>
            <label>
                Password:
                <input type="password" value={password} oncChange={(e) => setPassword(e.target.value)}/>
            </label>
            <button type="submit">Login</button>
        </form>
    );
};
// Signup Form componrnt
 export  const SignUpForm = ({ onsubmit}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onsubmit({ email, password, username });
    };
    return (
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <button type="submit">Sign Up</button>
        </form>
      );
}