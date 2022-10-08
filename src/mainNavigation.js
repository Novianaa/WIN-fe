import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Auth/Login'
import Register from './Pages/Auth/Register'

// import PublicRoute from "./Routes/PublicRouter";

const MainNavigation = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default MainNavigation