
import './App.css';
import { BrowserRouter,Route, Routes } from "react-router-dom"; /* to connect the app with browser url */


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<div>Home Page</div>}/> 
        <Route path='about' element={<div>About us </div>}/>
        <Route path ='contact' element = {<div>Contact us</div>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
