import React from 'react'
import { Route } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import { LoginScreen } from '../components/auth/LoginScreen'
import { RegisterScreen } from '../components/auth/RegisterScreen'

//Encardago de tener todas las paginas que estan relacionadas al login y  registerscreen
export const AuthRouter = () => {
  return (
    <div className='auth__main'>
      <div className='auth__box-container'>
        {/* <div className='auth__box-container'> */}
        <Switch>
          <Route
            exact
            path="/auth/login"
            component={LoginScreen}
          />

          <Route
            exact
            path="/auth/register"
            component={RegisterScreen}
          />

          <Redirect to='/auth/login' />

        </Switch>
      </div>
    </div>
  )
}
