import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import imgRegister from '../../../Assets/image/undraw_wait_in_line_o2aq.svg'
import { AuthRegister } from '../../../Redux/actions/auth.js'
import axios from "axios";
import './styles.css'

const Register = () => {
  let navigate = useNavigate()
  const [formRegister, setFormRegister] = useState({ name: '', email: '', password: '', gender: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`https://test-win-be.vercel.app/api/v1/auth/register`, formRegister)
      .then((res) => {
        navigate('/login')
      }).catch((err) => {
        toast.error(err.response.data.message)
      })
  }
  // const handleChangeText = (e) => {
  //   setFormRegister({ ...formRegister, [e.target.name]: e.target.value })
  // }
  console.log(formRegister)
  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <section className='d-flex wrapper-page'>
        <div className='register-left-side'>
          <div className='register-left-side-header'>
            <p className='register-left-side-header-title'>
              Sudah punya akun?
            </p>
            <Link href="/login">
              <button className="button-login">Login</button>
            </Link>
            <div>
              <img src={imgRegister} alt="" className='register-left-side-bg' />
            </div>
          </div>
        </div>
        <div className='register-right-side'>
          <p className='register-right-side-title'>Register</p>
          <form>
            <div className="form-controller" >
              <div className="field-form" required onChange={(e) => {
                setFormRegister((prevData) => ({
                  ...prevData, name: e.target.value
                }))
              }}>
                <label for="name" className="control-label">Name </label>
                <input type="text" name="name" id="name" placeholder="Write your name" className="field-control" required />
              </div>
              <div className="field-form" required onChange={(e) => {
                setFormRegister((prevData) => ({
                  ...prevData, email: e.target.value
                }))
              }}>
                <label for="email" className="control-label"> Email </label>
                <input type="email" name="email" id="email" placeholder="Write your email" className="field-control" required />
              </div>
              <div className="field-form" required onChange={(e) => {
                setFormRegister((prevData) => ({
                  ...prevData, password: e.target.value
                }))
              }}>
                <label for="password" className="control-label"> Password </label>
                <input type="password" name="email" id="email" placeholder="Write your password" className="field-control" required />
              </div>
              <div className="field-form" required onChange={(e) => {
                setFormRegister((prevData) => ({
                  ...prevData, gender: e.target.value
                }))
              }}>
                <label for="gender" className="control-label"> Gender </label>
                <div className="wrapper-gender">
                  <input type="radio" id="male" name="male" value="male" />
                  <label for="male"> Male</label><br />
                  <input type="radio" id="female" name="female" value="female" />
                  <label for="female"> Female</label>
                </div>
              </div>
              <button className="button-register" onClick={handleSubmit}>Register</button>
            </div>
          </form>
        </div>
      </section>
      <ToastContainer autoClose={2000} />
    </>
  )
}
export default Register