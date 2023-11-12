import React, {useState} from "react";
import authService from "../authenication/authService";

const Loginform = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Add your login logic here, such as sending data to a server

//     // For demonstration purposes, log the collected data
//     console.log('Username:', username);
//     console.log('Password:', password);

//     // You can reset the form by clearing the state
//     setUsername('');
//     setPassword('');
//   };

    const handleLogin = async () => {
        try {
        const token = await authService.login(username, password);
        console.log('Login successful! Token:', token);
        // Redirect or update state to indicate a successful login
        } catch (error) {
        console.error('Login failed:', error.message);
        // Handle login failure (e.g., display an error message)
        }
    };


    return (
        <form onSubmit={handleLogin}>
            <label>
                Username:
                <input type="text" value={username} onChange={handleUsernameChange} />
            </label>
            <br />
            <label>
                Password:
                <input type="password" value={password} onChange={handlePasswordChange} />
            </label>
            <br />
            <button type="submit">Login</button>
        </form>
    )
}

export default Loginform;