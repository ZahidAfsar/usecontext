import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePageComponenent from './components/HomePageComponenent.js';
import ProfilePageComponent from './components/ProfilePageComponent.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import UserContext from './Context/UserContext';
import UserHooks from './Hooks/UserHooks';

function App() {

  return (
  // Provider Allows Access to its value which in this case is UserHooks to all components, We call user hooks through userContext within our components
  <UserContext.Provider value={UserHooks()}>

  <BrowserRouter>
  {/* Wrapping our application in browserRoute to enable Routing */}
  <Routes>
    {/* '/' determands our homepage our are default rendered page */}
   <Route path='/' element={<HomePageComponenent/>} />
    <Route path='/profile' element={<ProfilePageComponent/>} />
  </Routes>
  </BrowserRouter>

  </UserContext.Provider>
  );

}

export default App;
