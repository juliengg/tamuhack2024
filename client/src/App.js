import './App.css';
import Sidebar from "./components/sidebar"
import Header from './components/header';
import Body from './components/Page1';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <div>
        <Header/>
        <Body/>
      </div>
    </div>
  );
}

export default App;
