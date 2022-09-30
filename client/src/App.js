

import './App.css';
import Home from './Components/Home';
import { Route, Routes } from "react-router-dom";
import Sidebar from './Components/Sidebar';

import ProductsList from './Components/Products/ProductsList';
import Articles from './Components/Article/Articles';
import UserProfile from './Components/Userprofile';
import Login from './Components/Login';
import Register from './Components/Register';
import Alerterrors from './Components/Alerterrors';
import Navigation from './Components/Navigation';

function App() {
  
  
  return (
    <div className="App">
       <Alerterrors/>
     
     <Sidebar>
      
        <Routes>
         
          <Route path="/home" element={<Home />} />
          <Route path="/Profile" element={<UserProfile />} />
          <Route path="/productList" element={<ProductsList />} />
          <Route path="/product" element={<Articles />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </Sidebar>
    </div>
  );
}

export default App;
