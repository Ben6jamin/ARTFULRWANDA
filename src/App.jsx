import React from 'react';
import SignUp from './Forms/SignUp.jsx';
import SignIn from './Forms/SignIn.jsx';
import Home from './Pages/Home.jsx';
import Event from './Pages/Event.jsx';
import Profile from './Pages/Profile.jsx';
import Artwork from './Pages/Artwork.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {
  return (

    <BrowserRouter>
      <Routes>

      <Route path='/' element={<Home />}> </Route>
        <Route path='/register' element={<SignUp />}> </Route>
        <Route path='/login' element={<SignIn />}> </Route>
        <Route path='/event' element={<Event />}> </Route>
        <Route path='/profile' element={<Profile />}> </Route>
        <Route path='/artwork' element={<Artwork />}> </Route>

      </Routes>
    </BrowserRouter>

  );
}

export default App;
