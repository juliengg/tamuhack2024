import './App.css';
import Sidebar from "./components/sidebar"
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <div>
        <Header/>
      </div>
    </div>
  );
}

export default App;
