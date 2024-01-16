
import './App.css';
import { BrowserRouter,Route, Routes } from "react-router-dom"; /* to connect the app with browser url */
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Error from './Error';


function App() {
  return (
    <BrowserRouter>
      <Routes>   
        <Route path = '/' element = {<Home/>}>  {/* this will nest the other paths. Everything inside here will be shared */}
        <Route path='about' element={<About/>}/>
        <Route path ='contact' element = {<Contact/>}/>
        <Route path ='*' element = {<Error/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
