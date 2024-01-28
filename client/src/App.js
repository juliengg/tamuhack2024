import './App.css';
import { Routes, Route, useNavigate } from "react-router-dom"
import { useState } from 'react';
import Sidebar from "./components/sidebar/sidebar"
import Header from './components/header';
<<<<<<< HEAD
import Home from './components/home';
import Page1 from './components/budgeting';
import Page2 from './components/investment';
import Page3 from './components/aipage';
=======
import Body from './components/Page1';
import InvestmentCalculator from './components/page2';
>>>>>>> raghav

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
<<<<<<< HEAD
        <div className='routes-container'>
          <Routes>
            <Route path="home" element={ <Home/> } />
            <Route path="page1" element={ <Page1/> } />
            <Route path="page2" element={ <Page2/> } />
            <Route path="page3" element={ <Page3/> } />
          </Routes>
        </div>
=======
        <Body/>
        <InvestmentCalculator/>
>>>>>>> raghav
      </div>
    </div>
  );
}

export default App;
