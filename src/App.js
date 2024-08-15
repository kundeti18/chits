import './App.css';
//import Button from 'react-bootstrap/Button';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from './login';
import Home from './home';
import Register from "./register";
import Portfolio from "./portfolio";

function Header() {
  return (
    <div className="App-header">
      <ul className="nav nav-tabs">
        <li class="nav-item"><Link to="/">Home</Link></li>
        <li class="nav-item"><Link to="/login">Login</Link></li>
      </ul>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/portfolio" element={<Portfolio />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
