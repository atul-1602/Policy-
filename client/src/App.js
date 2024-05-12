import './App.css';
import Home from "../src/pages/home/Home";
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Policy from './components/policy/Policy';
import { Provider } from "react-redux";
import store from "./redux/store/Store"
import Navbar from './components/navbar/Navbar';
import Login from './pages/login/Login';
import About from './pages/about/About';
import Contact from "./pages/contact/Contact"
import Footer from './components/footer/Footer';
function App() {
  return (
    <>
    <Provider store={store}>
    <Router>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route  path="/policies" element={<Policy/>}/>
      <Route  path="/about" element={<About/>}/>
      <Route  path="/contact" element={<Contact/>}/>
      <Route  path="/login" element={<Login/>}/>
    </Routes>
    <Footer/>
    </Router>
      
       
      </Provider>
      
  
    </>
  );
}
   
export default App;
