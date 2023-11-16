import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Employe from './components/Employe';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path='/form' element={<Employe/>} />
      <Route path='/home' element={<Home/>} />
    </Routes>
    
    </div>
  );
}

export default App;
