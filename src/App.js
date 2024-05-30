import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage';
import LoginForm from './pages/login';
import Signup from './pages/signup';
import Forum from './pages/forum';
import UploadResep from './pages/uploadresep';
import UploadDetail from './pages/uploaddetail';

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
      </Routes>
    </Router>
  );
}

export default App;
