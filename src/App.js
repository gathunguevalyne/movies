import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproducts from './components/Addproducts';
import Getproducts from './components/Getproducts';
import Makepayment from './components/Makepayment';
function App() {
  return (
    <BrowserRouter>

      <div className="App ">
        <header className="App-header bg-dark">
          <b> <h1 className=' '>Welcome to Movies 2.0</h1> </b>
        </header>
        <nav className='bg-primary'>
          <Link to="/signup" className='btn btn-danger m-2 '>  Sign up </Link>
          <Link to="/signin" className='btn btn-danger m-2'>  Sign In</Link>
          <Link to="/addproducts" className='btn btn-danger m-2'>   Add Products</Link>
          <Link to="/getproducts" className='btn btn-danger m-2'>  Get Products</Link>

        </nav>
        <Routes>
          <Route path="/getproducts" element={<Getproducts />} />
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
