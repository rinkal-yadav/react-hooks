import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import TestUseState from './Component/Test1';
import TestUseEffect from './Component/Test2';
import Navbar from './Navbar';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={''}/>
          <Route path='/usestate' element={<TestUseState/>}/>
          <Route path='/useeffect' element={<TestUseEffect/>}/>

        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
