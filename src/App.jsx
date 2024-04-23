import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import CreateAccount from './components/CreateAccount';
import SignIn from './components/SignIn';
import ProfilePage from './components/ProfilePage';


const App = () => {
  return (

    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/create-account' element={<CreateAccount />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
    </Router>
   
  )

}

export default App;