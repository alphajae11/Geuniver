// RegisterForm.js
import React, { useState } from 'react';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [DOBday, setDOBDay] = useState('');
  const [DOBmonth, setDOBMonth] = useState('');
  const [DOByear, setDOBYear] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhonenumber(e.target.value);
  }

  const handleDOBDayChange = (e) => {
    setDOBDay(e.target.value);
  };

  const handleDOBMonthChange = (e) => {
    setDOBMonth(e.target.value);
  };

  const handleDOBYearChange = (e) => {
    setDOBYear(e.target.value);
  };

  const handleProfilePictureChange = (e) => {
    // Assuming you want to handle file input for profile picture
    const file = e.target.files[0];
    setProfilePicture(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your registration logic here, such as sending data to a server
    // For demonstration purposes, log the collected data
    console.log('Name:', name);
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Mobile Number:', phonenumber);
    console.log('Date of Birth:', `${DOBday}/${DOBmonth}/${DOByear}`);
    console.log('Profile Picture:', profilePicture);

    // You can reset the form by clearing the state
    setName('');
    setUsername('');
    setPassword('');
    setPhonenumber('');
    setDOBDay('');
    setDOBMonth('');
    setDOBYear('');
    setProfilePicture(null);
  };
  // Implement your registration form JSX and logic here
  return (
    <form onSubmit={handleSubmit}>
      {/* Your form fields go here */}
      <label>
        Name:
        <input type='text' value={name} onChange={handleNameChange} />
      </label>
      <br />
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
      <label>
        Mobile Number:
        <input type="password" value={phonenumber} onChange={handlePhoneNumberChange} />
      </label>
      <br />
      <label>
        Date of Birth:
        <select value={DOBday} onChange={handleDOBDayChange}>
          {/* Add options for days */}
          {Array.from({ length: 31 }, (_, index) => index + 1).map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
        <select value={DOBmonth} onChange={handleDOBMonthChange}>
          {/* Add options for months */}
          {Array.from({ length: 12 }, (_, index) => index + 1).map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
        <select value={DOByear} onChange={handleDOBYearChange}>
          {/* Add options for years */}
          {Array.from({ length: 100 }, (_, index) => new Date().getFullYear() - index).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Profile Picture:
        <input type="file" accept="image/*" onChange={handleProfilePictureChange} />
      </label>
      <button type="submit">Register as a new User</button>
    </form>
  );
};
