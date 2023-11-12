// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/pages/Homepage';
import RegisterPage from './components/pages/beforelogin/Registerpage';
import Loginpage from './components/pages/beforelogin/Loginpage';
import Profilepage from './components/pages/Profilepage';
import JGgamelistpage from './components/pages/JGsoftware/JGGames/JGgamelistpage';
import JGCalendarpage from './components/pages/JGsoftware/CalTodo/JGCalendarpage';
import Blogpage from './components/pages/JGsoftware/blogpage';
import JGTodolistpage from './components/pages/JGsoftware/CalTodo/JGTodolistpage';
import JGwikipage from './components/pages/JGsoftware/JGwikipage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact Component={HomePage} />
        <Route path='/register' Component={RegisterPage} />
        <Route path='/login' Component={Loginpage} />
        <Route path='/profile' Component={Profilepage} />
        <Route path='/calendar' Component={JGCalendarpage} />
        <Route path='/todolist' Component={JGTodolistpage} />
        <Route path='/Blogs' Component={Blogpage} />
        <Route path='/JGGames' Component={JGgamelistpage} />
        <Route path='/JGwiki' Component={JGwikipage} />
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
