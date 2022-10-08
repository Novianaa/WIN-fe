import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import './styles.css'

const Navbar = () => {
  const { data, isLogin } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // useEffect(() => {
  //   if (isLogin === false) {
  //     navigate('/login', { replace: true })
  //   }
  // }, [isLogin, navigate])

  return (
    <>
      <nav className="navbar d-flex">
        <div className="container navbar-wrapper d-flex">
          <div className="navbar-left d-flex">
            <div className="navbar-left-menu">Home</div>
            <div className="navbar-left-menu">Product</div>
          </div>
          <div className="navbar-right d-flex">
            <button className="navigation-button-icon-mobile d-md-none" value="">
              <i className="bi bi-text-right fs-1 d-block d-md-none" />
            </button>
            <Link to="#navigation-menu" data-bs-toggle="collapse" href="#navigation-menu" aria-expanded="false"
              aria-controls="navigation-menu"></Link>
            <div className="wrapper-dropdown-profile">
              <div className="wrapper-photo-profile dropdown dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src='' alt='profile' className="photo-profile" />
              </div>
              <ul className="dropdown-profile dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link to='/profile' class="dropdown-item">Profile</Link></li>
                <li className="dropdown-item" >Log Out</li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="navbar-mobile d-md-none p-4 position-absolute text-center" id="menu">
        <div className="navbar-mobile-content">
          <Link to="../../Pages/Home" className="navbar-mobile-content-text d-block d-md-none">Home</Link>
        </div>
        <div className="navbar-mobile-content">
          <Link to="../../Pages/Product" className="navbar-mobile-content-text d-block d-md-none">Product</Link>
        </div>
      </div>
    </>
  )
}
export default NavbarLogin