import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';

import dashboard from './components/dasboard';
import signup from './components/signup';
import Login from './components/login';
import forgot from './components/forgot'
import reset from './components/reset';
import profile from './components/Catigoriesprofile';
import CatigorieShow from './components/ShowAllCatigories';
import searchcatigories from './components/searchComponent';
import header from './components/Header';
import Home from './components/Home';
import AllCard from '../src/components/AllCatigoriesCards/AllCard';
import AgricultureFoodtyeps from '../src/components/FilterShowCatigories/AgrIandFood';
import detailrouter from '../src/components/DetailRouter';
import showsearchCatigories from '../src/components/showSearch';
import store from '../src/store/redux';
import Header from "../src/components/Header";
import About from '../src/components/About'

class App extends Component {
  render() {
    return (
      <Provider store={store}>

        <BrowserRouter>

          <div>

            <Route exact path="/" component={Home} />
            <Route path="/searchcatigoriess" component={searchcatigories} />
            <Route path="/About" component={About} />
            <Route path="/Signup" component={signup} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={dashboard} />
            <Route path="/showsearchCatigories" component={showsearchCatigories} />
            <Route path="/detailrouter/:myid" component={detailrouter} />
            <Route path="/AllCard" component={AllCard} />
            <Route path="/AgricultureFoodtyeps" component={AgricultureFoodtyeps} />
            <Route path="/forgot" component={forgot} />
            <Route path="/reset/:token" component={reset} />
            <Route path="/profile" component={profile} />
            <Route path="/CatigorieShow" component={CatigorieShow} />







          </div>




        </BrowserRouter>
      </Provider>

    );
  }
}

export default App;
