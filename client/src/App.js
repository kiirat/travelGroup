import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken'
import { setCurrentUser, logoutUser } from './actions/authAction'
import PrivateRoute from './front/components/common/PrivateRoute'

import Header from './front/components/layout/Header'
import Home from './front/components/layout/Home'
import Footer from './front/components/layout/Footer'
import IndexAdmine from './admin/IndexAdmin'
import DataTable from './admin/components/DataTable'
import Login from './authentication/Login';
import Register from './authentication/Register';
import { ClearCurrentProfile } from './actions/profileAction';


// check for token 

if(localStorage.jwtToken) {
  // set auth token header auth
  setAuthToken(localStorage.jwtToken)
  // decode token and get user info and exp 
  const decoded = jwt_decode(localStorage.jwtToken)
  // set user and isAuthentificated
  store.dispatch(setCurrentUser(decoded))
  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser())
    store.dispatch(ClearCurrentProfile())
    window.location.href = '/login'
  }

}
function getHeader () {
  if(window.location.pathname === '/login'  || window.location.pathname === '/register' || window.location.pathname === '/admin') {
    return null
  }else {
    return  <Header />
  }
}
function getFooter () {
  if(window.location.pathname === '/login'  || window.location.pathname === '/register' || window.location.pathname === '/admin') {
    return null
  }else {
    return  <Footer />
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
            {getHeader()}
                <Route exact path='/' component={Home}/>
                <Route exact path='/register' component={Register}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/admin' component={IndexAdmine}/>
                <Switch>
                  <PrivateRoute exact path='/admin/data' component={DataTable}/>
                </Switch>
            {getFooter()}
          {/* <IndexAdmine /> */}
        </div>
      </Router>
    </Provider>
  );
}

export default App;
