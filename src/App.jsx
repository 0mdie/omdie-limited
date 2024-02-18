import './App.css';
// import Navbar from './Components/Navbar/';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Products from './Pages/Products';
import Shop from './Pages/Shop';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar/Navbar';

function App() {

  return (
    <div className='navbar-content'>
      <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route path='/omdie-limited' element={<Shop/>}/>
        <Route path='/omdie-limited/products' element={<Products/>}/>
        <Route path='/omdie-limited/contact' element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
