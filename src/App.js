import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import { Forme } from './Components/Form';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Forme/>
      <Footer/>

    </div>
  );
}

export default App;
