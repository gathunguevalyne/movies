import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproducts from './components/Addproducts';
import Getproducts from './components/Getproducts';
import Makepayment from './components/Makepayment';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>

      <div className="App ">
        <header className="App-header bg-dark">
          <h1 className=' text-danger'><img src="images/logo1.png" alt="logo" className="logo" /> <b>FilmHouse</b></h1>
          <marquee>✨Home Of Every Story✨</marquee>
        </header>
        <Navbar/>
          {/* <nav >
          <Link to="/signup" className='btn btn-danger m-2 '>  Sign up </Link>
          <Link to="/signin" className='btn btn-danger m-2'>  Sign In</Link>
          <Link to="/addproducts" className='btn btn-danger m-2'>   Add Products</Link>
          <Link to="/getproducts" className='btn btn-danger m-2'>  Get Products</Link>

        </nav> */}
        <Routes>
          <Route path="/" element={<Getproducts />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} />
          <Route path="/addproducts" element={<Addproducts />} />
          <Route path="/makepayment" element={<Makepayment />} />


        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
