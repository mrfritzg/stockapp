import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import Nav from './components/Nav';
import About from './pages/About';
import Home from './pages/Home';
import Stocks from './pages/Stocks';

function App() {
  return (
    <div>
      <Nav />   
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/stocks" element={<Dashboard />}/>
        <Route path="/stocks/:symbol" element={<Stocks />}/>
        <Route path="*" element={<><h1>This Page could not be found...</h1></>} />
      </Routes>
    </div>
  );
}

export default App;
