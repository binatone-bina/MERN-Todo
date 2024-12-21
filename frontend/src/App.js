import './App.css';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';

import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import SignUp from './components/signUp/SignUp';
import SignIn from './components/signUp/SignIn';
import Todo from './components/todo/Todo';

import React from 'react';


function App() { 

  return(
    <div>

      <Router>
        
        <Navbar/>

        <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/todo' element={<Todo/>}/>
          <Route path='/signUp' element={<SignUp/>}/>
          <Route path='/signIn' element={<SignIn/>}/>         

        </Routes>

        
      </Router>
      <Footer/>
    </div>
  )
}

export default App;
