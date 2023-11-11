// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/pages/Homepage';
import RegisterPage from './components/pages/Registerpage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact Component={HomePage} />
        <Route path='/register' Component={RegisterPage} />
      </Routes>
    </Router>
    // <div className="App">
    //   <HomePage />
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
