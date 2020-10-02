import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './Components/home';
import SignUp from "./Components/Pages/Register";
import UserSignIn from './Components/Pages/SignIn';
import Navbar from './Components/NavBar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route path='/register' component={SignUp} />
      <Route path="/login" component={UserSignIn} />
    </div>
  );
}

export default App;
