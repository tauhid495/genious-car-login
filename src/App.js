
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './pages/Shared/Footer/Footer';
import About from './pages/About/About';
import Home from './pages/Home/home/Home';
import Header from './pages/Shared/Header/Header';
import Register from './pages/register/Register';
import Login from './pages/Login/Login';
import LogOut from './pages/Login/LogOut';

import ServiceDetail from './pages/serviceDetail/ServiceDetail';
import NotFound from './pages/Shared/NotFound/NotFound';
import CheckOut from './pages/CheckOut/CheckOut';
import RequireAuth from './pages/Login/RequireAuth';

function App() {
  return (
    <div className=" ">
      <Header className='order-1' />

      <Routes order-last>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetail />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/logout' element={<LogOut />}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut />
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
