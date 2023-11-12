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
import ExternalNewspage from './components/pages/JGsoftware/JGNews/ExternalNewspage';
import JGNewspage from './components/pages/JGsoftware/JGNews/JGNewspage';
import JGAIMainpage from './components/pages/JGsoftware/JGAI/JGAIMainpage';
import JGBlockchainMainpage from './components/pages/JGsoftware/JGBlockchain/JGBlockchainMainpage';
import Weatherpage from './components/pages/JGsoftware/JGNews/Weatherpage';
import JGMessengerpage from './components/pages/JGsoftware/JGMessenger/JGMessengerpage';
import Gmapspage from './components/pages/JGsoftware/Gmaps/Gmapspage';
import BusApppage from './components/pages/JGsoftware/Gmaps/BusApppage';

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
        <Route path='/worldnews' Component={ExternalNewspage} />
        <Route path='/JGnews' Component={JGNewspage} />
        <Route path='/weather' Component={Weatherpage} />
        <Route path='/JGwiki' Component={JGwikipage} />
        <Route path='/JGMessenger' Component={JGMessengerpage} />
        <Route path='/Gmaps/map' Component={Gmapspage} />
        <Route path='/Gmaps/bus' Component={BusApppage} />
        <Route path='/JGAI' Component={JGAIMainpage} />
        <Route path='/JGBlockchain' Component={JGBlockchainMainpage} />
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
