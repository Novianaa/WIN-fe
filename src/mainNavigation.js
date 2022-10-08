import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Auth/Login'
import Register from './Pages/Auth/Register'
import Product from './Pages/Product'
import './index.css'
import { useEffect } from 'react';

// import PublicRoute from "./Routes/PublicRouter";

const MainNavigation = () => {
  useEffect(() => {
    import('bootstrap')
  }, [])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/product' element={<Product />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}
export default MainNavigation