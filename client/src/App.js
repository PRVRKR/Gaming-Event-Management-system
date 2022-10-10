import logo from './logo.svg';
import './App.css';
import './style.css';
import Header from './Component/Header/Header'
import Footer from './Component/Header/Footer'
import Home from './Component/MainComponent/Home'
import About from './Component/MainComponent/About'
import Contact from './Component/MainComponent/Contact'
import Service from './Component/MainComponent/Service'
import Signup from './Component/MainComponent/Signup'
import Palygames from './Component/MainComponent/Palygames'
import Login from './Component/MainComponent/Login'

import { useState } from 'react';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
     const [ user, setLoginUser] = useState({})
  return (
       <BrowserRouter>
       <Header />
          <Routes>
               <Route path='/' element = {<Home />} />
               <Route path='/About' element = {<About />} />
               <Route path='/Contact' element = {<Contact />} />
               <Route path='/Service' element = {<Service />} />
               <Route path='/Signup' element = {<Signup />} />
               <Route path='/Login' element = {<Login setLoginUser={setLoginUser}/>} />
               <Route path='/Playgames' element = { user && user._id ? <Palygames setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>} />
            

          </Routes>
       
       <Footer />
       </BrowserRouter>
  );
}

export default App;
