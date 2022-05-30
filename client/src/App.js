import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MyFinances from './pages/MyFinances';
import Form from './pages/Form';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/myfinances' element={<MyFinances/>}/>
          <Route path='/form' element={<Form/>}/> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App; 
