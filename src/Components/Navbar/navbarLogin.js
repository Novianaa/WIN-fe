import { useEffect } from "react"
import { Helmet } from "react-helmet"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { AuthLogout } from "../../Redux/actions/auth"
import './styles.css'


const NavbarLogin = () => {
  const { data, isLogin } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    if (isLogin === false) {
      navigate('/login', { replace: true })
    }
  }, [isLogin, navigate])

  return (
    <>
      <nav className="navbar d-flex">
        <div className="container navbar-wrapper d-flex">
          <div className="navbar-left d-flex">
            <Link to='/' className="wrapper-link">
              <div className="navbar-left-menu">Home</div>
            </Link>
            <Link to='/product' className="wrapper-link">
              <div className="navbar-left-menu">Product</div>
            </Link>
            <Link to='/profile' className="wrapper-link">
              <div className="navbar-left-menu">Profile</div>
            </Link>
          </div>
          <div className="navbar-login-right">
            <button className="btn-logout" value="" onClick={() => { dispatch(AuthLogout()) }}>
              Log Out
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}
export default NavbarLogin