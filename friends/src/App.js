import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/HomePage';
import Header from './components/Header';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import FriendsList from './components/FriendList'
import ProtectedRoute from "./components/ProtectedRoutes";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <ProtectedRoute exact path='/friends' component={FriendsList} />
        </Switch>
      </div>
    </>
  );
}

export default App;
