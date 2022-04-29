import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import UseContextHook from './Component/useContextHook/Test3'
import UserContextProvider from './Component/useContextHook/UserContext'
import TestUseState from './Component/useStateHook/Test1';
import TestUseEffect from './Component/useEffectHook/Test2';
import Navbar from './Navbar';


function App() {
  return (
    <div className="App">
      <UserContextProvider>

      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={''}/>
          <Route path='/usestate' element={<TestUseState/>}/>
          <Route path='/useeffect' element={<TestUseEffect/>}/>
          <Route path='/usecontext' element={<UseContextHook/>}/>


        </Routes>
      </Router>
      </UserContextProvider>
     
    </div>
  );
}

export default App;
