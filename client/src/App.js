import './App.css';
import Login from './pages/login/Login'
import { Home } from './pages/home/Home';
import { BrowserRouter as Router } from 'react-router-dom';
import Policy from './components/policy/Policy';



function App() {
  return (
    <div className="App">
      {/* <Login/> */}
        <Router basename="/">               
      {/* <Home/> */}
      </Router>
      {/* <Policy/> ? */}  
      {/* <Login/> */}
      <Policy/>
      <Policy/>
      <Policy/>
      <Policy/>
      <Policy/>

    </div>
  );
}
   
export default App;
