import React from 'react'
import { Redirect } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';

//Sistema de rutas principal
export const AppRouter = () => {
  return (
    // <div className='auth__main'>
    //   <div className='auth__box-container'>
    <Router>
      <div>
        <Switch>

          <Route
            path='/auth'
            component={AuthRouter}
          />

          <Route
            exact
            path='/'
            component={JournalScreen}
          />

          <Redirect to='/auth/login' />

        </Switch>
      </div>
    </Router>
    //   </div>
    // </div>
  )
}
