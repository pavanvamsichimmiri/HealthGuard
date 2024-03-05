// import './App.css';
import React, { Fragment } from 'react';
import Header from './Components/Header/Nav';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import { Routes,Route } from 'react-router-dom';
function App() {
    return(
    <div className="App">
      <Routes>
        {/* <Route  exact path="/" Component={Login}/> */}
        <Route  exact path="/" Component={Login}/>
        <Route exact path="/Register" Component={Register}/>
        <Route path='/Home' element={<><Header/><Home /> </>} />
    </Routes>      
    </div>

  );
}
export default App;
