import './App.css';
import Login from './pages/login/Login'
import { Home } from './pages/home/Home';
import { BrowserRouter as Router } from 'react-router-dom';



function App() {
  return (
    <div className="App">
        <Router basename="/">
      {/* <Login/> */}
      <Home/>
      </Router>
    </div>
  );
}
   
export default App;
