import './App.css';
import Button from 'react-bootstrap/Button';

function App() {
  let logTitle = "Welcome to Chits";
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="logoTitle">{logTitle}</h1>
        <Button variant="primary" type="submit">SignUp</Button>{'  '} &nbsp;&nbsp;&nbsp;
        <Button variant="success">Login</Button>
      </header>
    </div>
  );
}

export default App;
