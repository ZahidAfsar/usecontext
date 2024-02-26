import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePageComponenent from './components/HomePageComponenent.js';
import ProfilePageComponent from './components/ProfilePageComponent.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
   <>
  <BrowserRouter>
  {/* Wrapping our application in browserRoute to enable Routing */}
  <Routes>
    {/* '/' determands our homepage our are default rendered page */}
   <Route path='/' element={<HomePageComponenent/>} />
    <Route path='/profile' element={<ProfilePageComponent/>} />
  </Routes>
  </BrowserRouter>
   </>
  );
}

export default App;
