import logo from './logo.svg';
import './App.css';
import Logo1 from './Logo1';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Logo1/>
        <Navbar/>
        <p>
          Hello Anisha
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          Hello Anisha Raj
        </p>
        
      </header>
     
    </div>
  );
}

export default App;
