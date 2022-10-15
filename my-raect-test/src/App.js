import './App.css';
import Logo1 from './Logo1';
import Navbar from './Navbar';
import Testcar from './components/Testcar';
import Profile from './components/Profile';
import Avatar from './components/Avatar';
import Button from './components/Button';
import BasicExample from './components/Cardtest';
import Math from './components/Math';

function App() {
  // const testColor = "red";
  // const testBrand = "BMW";
    const carInfo = {testColor:'red', testBrand:'BMW' };

  return (
    <>
    <div>
      {/* <BasicExample /> */}

    </div>



    <div className="App">
      <header className="App-header">

        {/* <Testcar color={testColor} brand={testBrand} /> */}
        <Testcar testCar = {carInfo} />
        <Math />
        <Button message="Hello!! How are you?"> Hello </Button>
         <Button message="Hello!! I am here for you!">  Hello2 </Button>

        <Profile />

        <Button message="Hello! I am a button"> Press me </Button>
        
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
    </>
  );
}

export default App;
