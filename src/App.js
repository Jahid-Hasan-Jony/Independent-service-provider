import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Login from './Component/LogInSystem/Login/Login';
import NotFoundPage from './Component/NotFoundPage/NotFoundPage';
import Register from './Component/LogInSystem/Register/Register';
import RequireAuth from './Component/LogInSystem/RequireAuth/RequireAuth';
import CheckOut from './Component/CheckOut/CheckOut';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut />
          </RequireAuth>
        } />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
