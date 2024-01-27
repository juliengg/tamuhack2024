import './App.css';
import { Routes, Route, useNavigate } from "react-router-dom"
import { useState } from 'react';
import Sidebar from "./components/sidebar/sidebar"
import Header from './components/header';
import Home from './components/home';
import Page1 from './components/budgeting';
import Page2 from './components/investment';
import Page3 from './components/aipage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const navigate = useNavigate();
  function changeCurrentPage(page) {
    console.log(page);
    setCurrentPage(page);
    navigate(page);
  }


  return (
    <div className="App">
      <Sidebar currentPage={currentPage} changeCurrentPage={changeCurrentPage}/>
      <div className='main-container'>
        <Header/>
        <div className='routes-container'>
          <Routes>
            <Route path="home" element={ <Home/> } />
            <Route path="page1" element={ <Page1/> } />
            <Route path="page2" element={ <Page2/> } />
            <Route path="page3" element={ <Page3/> } />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
