import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage';
import LoginForm from './pages/login';
import Signup from './pages/signup';
import Forum from './pages/forum';
import UploadResep from './pages/uploadresep';
import UploadDetail from './pages/uploaddetail';
import Favorit from './pages/favorit';
import SuccessPage from './pages/sukses';
import Resep from './pages/resep';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<LoginForm/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/forum' element={<Forum/>} />
        <Route path='/uploadresep' element={<UploadResep/>} />
        <Route path='/uploaddetail' element={<UploadDetail/>} />
        <Route path='/favorit' element={<Favorit/>} />
        <Route path='/sukses' element={<SuccessPage/>} />
        <Route path='/resep' element={<Resep/>} />
      </Routes>
    </Router>
  );
}

export default App;
