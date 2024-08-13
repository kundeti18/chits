import './App.css';
import Button from 'react-bootstrap/Button';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from './login';
import Home from './home';

function Header() {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/login"><div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <Button size="lg" variant="success"><Link to="/login">Login</Link></Button>&nbsp;&nbsp;
      </div>
      </Link>
      </li>
    </ul>
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
        </Routes>
      </BrowserRouter>
      {/* <header className="App-header">
        <h1 className="logoTitle">{logTitle}</h1>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <Button size="lg" variant="success"><Link to="/login">Login</Link></Button>&nbsp;&nbsp;
        </div>
      </header> */}
    </div>
  );
}

export default App;
