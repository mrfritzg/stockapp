import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Nav />   
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About />}/>
        <Route path="/stocks" element={<Dashboard />}/>
        <Route path="/stocks/:symbol" element={<Stock/>}/>
        <Route path="*" element={<><h1>This Page could not be found...</h1></>} />
      </Routes>
    </div>
  );
}

export default App;
