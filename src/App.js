import './App.css';
import Home from './pages/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Signature from './pages/Home/Signature';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/signature' element={<Signature/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;