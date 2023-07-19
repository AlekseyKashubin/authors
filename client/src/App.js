import './Authors.css';
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './views/Dashboard';
import EditAuthor from './views/EditAuthor';
import NewAuthor from './views/NewAuthor';


function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      

      <Routes>
        <Route path='/' element={<Dashboard />} ></Route>
        <Route path='/authors' element={<Dashboard />} ></Route>
        <Route path='/authors/new' element={<NewAuthor />}></Route>
        <Route path='/authors/:id/edit' element={<EditAuthor />}></Route>
      </Routes>



    </div>
  );
}

export default App;
