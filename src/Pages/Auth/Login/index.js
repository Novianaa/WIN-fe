import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import { FaFacebookF, FaGoogle, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import './styles.css'
import imgLogin from '../../../Assets/image/undraw_wait_in_line_o2aq.svg'
import { useDispatch, useSelector } from "react-redux";
import { AuthLogin } from '../../../Redux/actions/auth.js'

const Login = () => {
  const { error, loading, isLogin } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  let navigate = useNavigate()
  const [formLogin, setFormLogin] = useState({
    email: '',
    password: ''
  })
  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(AuthLogin(formLogin))
  }

  useEffect(() => {
    if (isLogin === true) {
      navigate('/', { replace: true })
    } else {
      navigate('/login', { replace: true })
    }
  }, [isLogin, navigate])
  return (
    <>
      <Helmet>
        <meta name="theme-color" content="#fedce4" />
        <meta name="description" content="Author: Novia,
        Name Web : Tickitz, Category: Booking Ticket Bioskop"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&family=Mulish:wght@400;600;700&family=Open+Sans&display=swap"
          rel="stylesheet" />
        <title>Login</title>
      </Helmet>
      <section className='d-flex wrapper-page'>
        <div className='left-side'>
          <div className='left-side-header'>
            <p className='left-side-header-title'>
              Belum punya akun? buat akun disini
            </p>
            <Link href="/register">
              <button className="btn-register">Daftar</button>
            </Link>
            <div>
              <img src={imgLogin} alt="" className='left-side-bg' />
            </div>
          </div>
        </div>
        <div className='right-side'>
          <p className='right-side-title'>Sign In</p>
          <form>
            <div className="form-controller" >
              <div className="field-form" required onChange={(e) => {
                setFormLogin((prevData) => ({
                  ...prevData, email: e.target.value
                }))
              }}>
                <label for="email" className="control-label"> Email </label>
                <input type="email" name="email" id="email" placeholder="Write your email" className="field-control" required />
              </div>
              <div className="field-form" required onChange={(e) => {
                setFormLogin((prevData) => ({
                  ...prevData, password: e.target.value
                }))
              }}>
                <label for="password" className="control-label"> Password </label>
                <input type="password" name="email" id="email" placeholder="Write your password" className="field-control" required />
              </div>
              <button className="btn-login" onClick={handleLogin}>Sign In</button>
            </div>
          </form>
        </div>
      </section>
      <ToastContainer autoClose={2000} />
    </>
  )
}
export default Login