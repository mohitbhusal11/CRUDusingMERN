import logo from './logo.svg';
import './App.css';

//components
import AddUser from './components/AddUser';
import Navbar from './components/Navbar';
import AllUsers from './components/AllUsers';
import Fryingcode from './components/Fryingcode';
import EditUser from './components/EditUser';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Fryingcode/>} />
          <Route path='/AddUser' element={<AddUser/>} />
          <Route path='/AllUsers' element={<AllUsers/>} />
          <Route path='/EditUser/:id' element={<EditUser/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
