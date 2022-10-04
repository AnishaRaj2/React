import logo from './logo.svg';
import './App.css';
import Logo1 from './Logo1';
import Navbar from './Navbar';
import Button from './components/Button';

function App() {
  // const testColor = "red";
  // const testBrand = "BMW";
    const carInfo = {testColor:'red', testBrand:'BMW' };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* <Button color={testColor} brand={testBrand} /> */}
        <Button testCar = {carInfo} />

        <Logo1/>
          <div className="round">
            <div>
              <h1>TEXT</h1>
            </div>

          </div>
          
        <Navbar/>
        <p>
          Hello Anisha!!!!
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
