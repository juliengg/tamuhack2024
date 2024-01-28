import './App.css';
import { Routes, Route, useNavigate } from "react-router-dom"
import { useState } from 'react';
import Sidebar from "./components/sidebar/sidebar"
import Header from './components/header';
import Home from './components/home';
import Page1 from './components/budgeting';
import Page3 from './components/aipage';
import InvestmentCalculator from './components/page2';

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
            <Route path="page2" element={ <InvestmentCalculator/> } />
            <Route path="page3" element={ <Page3/> } />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
